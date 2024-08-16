const EventSchema = require('../Models/EventSchema')

const showEvent = async(req,res)=>{
    try {
       let data = await EventSchema.find({})
       console.log(data)
       res.send("showEvent")
    } catch (error) {
        
    }
}

const addEvent = async(req,res)=>{
    try {
        let data = new EventSchema(req.body)
        await data.save()
        res.send("")
        console.log(req.body)
    } catch (error) {
        
    }
}
const deleteEvent = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const editEvent = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.showEvent = showEvent
exports.addEvent = addEvent
exports.deleteEvent = deleteEvent
exports.editEvent = editEvent