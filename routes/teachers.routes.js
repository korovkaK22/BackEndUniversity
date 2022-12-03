const Router = require('express')
const router = new Router()
const teachersController = require('../controllers/teachers.controller')

router.get('/viewAll', teachersController.getAllTeachers);
router.get('/view/:id', teachersController.getOneTeachers);
router.post('/create', teachersController.createTeachers);
router.delete('/delete', teachersController.deleteTeachers);
router.post('/create', teachersController.editTeachers);

module.exports = router