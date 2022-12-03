const Router = require('express')
const router = new Router()
const facultiesController = require('../controllers/faculties.controller')

router.get('/viewAll', facultiesController.getAllFaculties);
router.get('/view/:id', facultiesController.getOneFaculties);
router.post('/create', facultiesController.createFaculties);
router.delete('/delete', facultiesController.deleteFaculties);

module.exports = router