const Router = require('express')
const router = new Router()
const groupsController = require('../controllers/groups.controller')

router.get('/viewAll', groupsController.getAllGroups);
router.get('/view/:id', groupsController.getOneGroups);
router.post('/create', groupsController.createGroups);
router.delete('/delete', groupsController.deleteGroups);
router.post('/edit', groupsController.editGroups);

module.exports = router