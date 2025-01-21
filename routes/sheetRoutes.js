const router = require('express').Router();
const SheetController = require('../controllers/characterController');

router.get('/sheets', SheetController.getAll)

module.exports = router