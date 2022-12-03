const Router = require('express')
const router = new Router()
const schedulesController = require('../controllers/schedules.controller')

router.get('/viewAll', schedulesController.getAllSchedules);
router.get('/view/:id', schedulesController.getOneSchedules);
router.post('/create', schedulesController.createSchedules);
router.delete('/delete', schedulesController.deleteSchedules);
router.post('/edit', schedulesController.editSchedules);

module.exports = router