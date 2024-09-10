const {Router} = require('express')
const router = Router()
const NewsController = require('../controllers/views.controller')

router.get('/news',NewsController.getNews)

module.exports = router