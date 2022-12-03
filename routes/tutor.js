const Router = require('express')
const router = new Router()
const faqController = require('../controllers/faq.controller')

router.get('/viewAll', faqController.getAllFaq);
router.get('/view/:id', faqController.getOneFaq);
router.post('/create', faqController.createFaq);
router.delete('/delete', faqController.deleteFaq);
router.post('/edit', faqController.editFaq);

module.exports = router