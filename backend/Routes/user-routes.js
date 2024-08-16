const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.get('/showUser' , userController.showUser)
router.post('/userRegister' , userController.userRegister)

module.exports= router