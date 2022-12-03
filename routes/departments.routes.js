const Router = require('express')
const router = new Router()
const departments = require('../controllers/departments.controller')

router.get('/viewAll', departments.getAllDepartments);
router.get('/view/:id', departments.getOneDepartments);
router.post('/create', departments.createDepartments);
router.delete('/delete', departments.deleteDepartments);

module.exports = router