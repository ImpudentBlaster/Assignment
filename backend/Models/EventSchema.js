const mongoose = require('mongoose')
const eventData = mongoose.Schema({
    title:{
        required:false,
        type:String
    },
    desc:{
        type:String,
        required:false
    },
    date:{
        type:String,
        required:false
    },
    time:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    }
})

const EventSchema = mongoose.model('EventSchema' ,eventData )
module.exports = EventSchema