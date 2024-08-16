const mongoose = require('mongoose')
const {isEmail} = require('validator')
const userData = mongoose.Schema({
    email:{
        required:[false , "email is required"],
        type:String,
        validate:[isEmail , "Please enter a valid email"],
        unique:true
    },
    password:{
        type:String,
        required:[false,"password is required"],
        minlenght:[8 , "minimum password length is 8 characters"]
    },
    username:{
        type:String,
        required:false
    }
})

const userSchema = mongoose.model('userSchema' , userData)
module.exports = userSchema