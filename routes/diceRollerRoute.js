const router = require("express").Router();
const DiceController = require("../controllers/diceController");

router.get('/sides', DiceController.rollDice);
module.exports = router;