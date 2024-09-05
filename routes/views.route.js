const {Router} = require('express')
const router = Router()
const NewsController = require('../controllers/views.controller')
// const authMiddlewere = require('../middlewere/auth.middlewere')

router.get('/news',NewsController.getNews)

module.exports = router