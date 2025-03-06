module.exports = class DiceController{
    static rollDice(req, res){
        const side = parseInt(req.body.dice);
        const operation= parseInt(req.body.operation)
        const dice =Math.floor( Math.random() * side+1) + operation;
        
        res.status(200).json(dice);
    }
}