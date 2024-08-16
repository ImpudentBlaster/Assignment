const express= require('express')
const router = express.Router()
const EventController = require('../Controllers/EventController')

router.get('/showEvent' ,EventController.showEvent)
router.post('/addEvent' , EventController.addEvent)
router.post('/deleteEvent' , EventController.deleteEvent)
router.post('/editEvent' , EventController.editEvent)

module.exports = router