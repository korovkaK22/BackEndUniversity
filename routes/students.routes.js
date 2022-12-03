const Router = require('express')
const router = new Router()
const studentsController = require('../controllers/students.controller')

router.get('/viewAll', studentsController.getAllStudents);
router.get('/view/:id', studentsController.getOneStudents);
router.post('/create', studentsController.createStudents);
router.delete('/delete', studentsController.deleteStudents);
router.post('/edit', studentsController.editStudents);

module.exports = router