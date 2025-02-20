module.exports = class DiceController{
    static rollDice(req, res){
        const side = parseInt(req.body.dice);
        const dice =Math.floor( Math.random() * side+1);
        res.status(200).json(dice);
    }
}