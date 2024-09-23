const {Router} = require('express')
const router = Router()
const NewsController = require('../controllers/views.controller')
const authMiddlewere = require("../middlewere/auth.middlewere");
const SkillController = require("../controllers/skill.controller");

router.get('/news',NewsController.getNews)
router.post('/createpost',authMiddlewere,NewsController.createPost)
router.post('/plusaup',authMiddlewere,NewsController.plusAUP)
router.get('/getaup',NewsController.getAUP)
router.post('/delman',authMiddlewere,NewsController.delMan)
router.post('/plusvideo',authMiddlewere,NewsController.plusVideo)
router.post('/pluscomvak',authMiddlewere,NewsController.plusComVak)
router.get('/getcomvak',authMiddlewere,NewsController.getComVak)
router.post('/delcomvak',authMiddlewere,NewsController.delComVak)
router.post('/createvak',authMiddlewere,NewsController.createVak)
router.get('/getvakansii',authMiddlewere,NewsController.getVakansii)
router.post('/editvak',authMiddlewere,NewsController.editVak)
router.post('/getabout',authMiddlewere,NewsController.getAbout)
router.post('/saveabout',authMiddlewere,NewsController.saveAbout)
router.post('/pluscompany',authMiddlewere,NewsController.plusCompany)
router.get('/getgroupcompanyes',authMiddlewere,NewsController.getGroupCompanyes)



module.exports = router