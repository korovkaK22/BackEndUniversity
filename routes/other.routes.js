const Router = require('express')
const router = new Router()
const otherController = require('../controllers/other.controller')


router.get('/checkConnection', otherController.checkConnection);


module.exports = router