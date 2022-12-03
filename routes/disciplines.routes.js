const Router = require('express')
const router = new Router()
const disciplinesController = require('../controllers/disciplines.controller')

router.get('/viewAll', disciplinesController.getAllDisciplines);
router.get('/view/:id', disciplinesController.getOneDisciplines);
router.post('/create', disciplinesController.createDisciplines);
router.delete('/delete', disciplinesController.deleteDisciplines);
router.post('/edit', disciplinesController.editDisciplines);

module.exports = router