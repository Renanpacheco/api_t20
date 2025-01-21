const mongoose = require('../db/conn.js')
const { Schema } = mongoose
/* add:
* points to buy attributes
* roll dice generate attributes
* xp
* multiclass
* calculate the space on the bag
* calculate values  of skills and quantity obs: int
*/ 
const Sheet = mongoose.model(
    'Sheet',
    new Schema({
        name:{ 
            type: String,
            required: true
        },
        class_character:{
            type: String,
            required: true
        },
        /*char_race:{ //change for a way to select a race from list, make alterations of this race
            type: String,
            required: true
        },
        char_origin:{ //change for a way to select a origin from a list
            type: String,
            required: true
        },
        god:{ 
            type: String,
            required: false
        },
        level_character:{
            type: Number,
            required: true
        },
        level_class:{
            type: Number,
            required: true
        },
        hit_points:{
            type: Number,
            required: true
        },
        mana_points:{
            type: Number,
            required: true
        },
        strenght:{
            type: Number,
            required: true
        },
        dexterity:{
            type: Number,
            required: true
        },
        constitution:{
            type: Number,
            required: true
        },
        inteligence:{
            type: Number,
            required: true
        },
        wisdom:{
            type: Number,
            required: true
        },
        charisma:{
            type: Number,
            required: true
        },
        speed:{
            type: Number,
            required: true
        },
        traomed_skills:{ //change the type of skills for a way to select a skill from a list
            type: String,
            required: true
        },
        equipament:{ //change for select a equipament from a list,skills and limit bag items
            // obs the class and proefficiency
            type: String,
            required: false
        },
        money:{
            type: Number,
            required: true
        },
        bag:{// be a object or array of objects
            type: String,
            required: true
        },
        magic:{ // select a magic from a list, verify class, calculate CD
            type: String,
            required: false
        },
        powers:{ //change the powers for a way to select from a list
            type: String,
            required: false
        },
        proficiency:{ //select a proficiency from a list and class
            type: String,
            required: false
        },
        defese:{
            type: Number,
            required: true
        },
        size:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        alignment:{//list of alignment
            type: String,
            required: false
        },*/
        
    }
    )
)

module.exports = Sheet