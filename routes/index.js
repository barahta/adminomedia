const Router = require('express')
const router = new Router()

const viewsRouter = require('./views.route')
router.use('/views',viewsRouter)

module.exports = router