const express = require('express');
const config = require('config');
const cors = require('cors');
const sequelize = require('./db');
const app = express();
const PORT = config.get('serverPort');
const cookieParser = require('cookie-parser');
const multer = require('multer'); // Для загрузки файлов
const path = require("path");
const fs = require("fs");
const http = require('http');
const { Server } = require('socket.io'); // Для работы с WebSockets

const router = require('./routes/index');
const errorMiddlewere = require('./middlewere/error.middlewere');

// Создаем сервер с использованием http для работы с сокетами
const server = http.createServer(app);
const io = new Server(server); // Инициализация Socket.IO

// Настраиваем хранилище для видео
const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'client', 'public', 'videos')); // Папка для сохранения видео
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname); // Получаем расширение файла
        cb(null, file.fieldname + '-' + uniqueSuffix + extension); // Генерируем уникальное имя файла с расширением
    }
});

// Настраиваем `multer` для загрузки видео с ограничением размера
const uploadVideo = multer({
    storage: videoStorage,
    limits: { fileSize: 100 * 1024 * 1024 } // Ограничение размера файла (например, 100 MB)
});

// Маршрут для загрузки видео
app.post('/api/uploadVideo', uploadVideo.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No video uploaded' });
    }

    const videoPath = `/videos/${req.file.filename}`; // Возвращаем полный путь к файлу
    res.json({ videoPath });
});

// Настраиваем хранилище для multer с сохранением оригинального имени и расширения файла
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'client', 'public', 'images', 'company')); // Папка для сохранения
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname); // Получаем расширение файла
        cb(null, file.fieldname + '-' + uniqueSuffix + extension); // Генерируем уникальное имя файла с расширением
    }
});

// Настраиваем multer с новым хранилищем
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Ограничение размера файла (5 MB)
});

app.use(cors({
    origin: config.get('client_url'),
    credentials: true
}));
app.use('/files', express.static(config.get('file_path')));
app.use(cookieParser());
app.use(express.json({ extended: true, limit: '3mb' }));
app.use(express.urlencoded({ extended: true, limit: '3mb' }));
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Маршрут для загрузки изображений
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = `/images/company/${req.file.filename}`; // Возвращаем полный путь к файлу с расширением
    res.json({ filePath });
});

// Маршрут для получения всех изображений
app.get('/api/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'client', 'public', 'images', 'company');

    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            console.error('Unable to scan directory:', err);
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const imagePaths = files.map(file => `/images/company/${file}`);
        res.json({ images: imagePaths }); // Возвращаем массив путей к изображениям
    });
});

// Пример работы с WebSockets
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        console.log('Message received: ', message);
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Обработка ошибок
app.use(errorMiddlewere); // Обязательно последний!

const start = async () => {
    try {
        server.listen(PORT, () => { // Используем server.listen вместо app.listen
            console.log('Server started on port:', PORT);
        });

        // await sequelize.sync({ alter: true })
        await sequelize.authenticate();
        console.log('Connected to DB');
    } catch (e) {
        console.log(e);
    }
};

start();