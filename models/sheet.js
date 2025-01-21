const mongoose = require('../db/conn.js')
const { Schema } = mongoose

const Sheet = mongoose.model(
    'Sheet',
    new Schema({
        name:{ 
            type: String,
            required: true
        },
        class:{
            type: String,
            required: true
        },
        level:{
            type: Number,
            required: true
        },
        
    }//, {timestamps: true}
    )
)

module.exports = Sheet