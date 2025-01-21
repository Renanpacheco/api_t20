const router = require('express').Router();
const SheetController = require('../controllers/characterController');

router.get('/sheets', SheetController.getAll)
router.post('/create', SheetController.createSheet)

module.exports = router