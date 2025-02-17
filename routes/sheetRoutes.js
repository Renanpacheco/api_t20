const router = require('express').Router();
const SheetController = require('../controllers/sheetController');

router.get('/sheets', SheetController.getAll)
router.get("/sheets/:id", SheetController.getSheetById);
router.post('/create', SheetController.createSheet)
router.patch("/edit/:id", SheetController.editSheet);
router.delete('/delete/:id', SheetController.deleteSheet);

module.exports = router