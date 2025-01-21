const Sheet = require('../models/sheet')
module.exports = class SheetController{
    static async getAll(req,res){
        const sheets = await Sheet.find().sort('name')
        res.status(200).json({sheets: sheets});
        
    }

    static async createSheet(req, res){
        const { name, class_character } = req.body;
        const sheet = new Sheet({
            name,
            class_character
        })
        try{
            const newSheet = await sheet.save()
            res.status(201).json(newSheet)
        }catch(error){
            res.status(500).json({message: error})
        }
    }
}