const Sheet = require('../models/sheet')
module.exports = class SheetController{
    static async getAll(req,res){
        res.status(200).json({message: "OK"});
        console.log("ok")
    }
}