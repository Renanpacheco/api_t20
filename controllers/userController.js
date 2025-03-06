const User = require('../models/user')
const bcrypt = require("bcrypt");

module.exports = class UserController{
    static async register(req, res){
        const {name, email, password, gm} = req.body

        if(!name){
            res.status(422).json({message:"Please enter the name"})
            return
        }
        if(!email){
            res.status(422).json({message:"Please enter the e-mail address"})
            return
        }
        
        if(!password){
            res.status(422).json({message:"Please enter the password"})
            return
        }
        if(!gm){
            res.status(422).json({message:"Please enter if the player is a gm"})
            return
        }

        const userExists = await User.findOne({email: email})
        if(userExists){
            res.status(422).json({message: "User already exists with the same email"})
            return
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = new User({
            name,
            email, 
            password:passwordHash,
            gm
        })

        try {
            const newUser = await user.save()
            await createUsertoken(newUser,req, res)
        } catch (error) {
            res.status(500).json({ message: error })
        }

    }
}