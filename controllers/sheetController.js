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

    static async getSheetById(req, res){
        //const id = req.params.id
        const sheet = await Sheet.findById(req.params.id)

        if(!sheet){
            res.status(422).json({message: "Don't have this character"})
            return
        }
        res.status(200).json({sheet})
    }

    static async editSheet(req, res) {
        const sheet = await Sheet.findById(req.params.id)
        if(!sheet){
            res.status(422).json({message: "Don't have this character"})
            return
        }

        const data = req.body
        sheet.name = data.name
        sheet.class_character = data.class_character
        
        try {
            await Sheet.findByIdAndUpdate(
                {_id: sheet._id}, 
                {$set: sheet},
            )
            res.status(200).json({message: 'alterated with success'})
        } catch (error) {
            res.status(500).json({ message: error });
        }

    }

    static async deleteSheet(req,res){
        const sheet = await Sheet.findById(req.params.id)

        if(!sheet){
            res.status(422).json({message: "Don't have this character"})
            return
        }

        try {
            await Sheet.findOneAndDelete({_id: req.params.id})
            res.status(200).json({ message: "deleted with success" });
        } catch (error) {
            res.status(500).json({ message: error });
        }
        
    }
}