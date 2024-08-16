const userSchema = require('../Models/UserSchema')

const userRegister = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let registeredUser = await userSchema.findOne({ email: email })
    if (registeredUser) {
      res.send("User is already registered");
      return;
    }
    let data = new userSchema({
      email, password, username
    })
    await data.save()
    res.send(data._id)

  } catch (error) {
    console.log(error)
  }
}

const showUser = async(req,res)=>{
  try {
    let data = await userSchema.find({})
    res.send(data)
  } catch (error) {
    console.log(error.message)
  }
}

const findUser = async(req,res)=>{
  try {
    
    
  } catch (error) {
    
  }
}

exports.showUser = showUser
exports.userRegister = userRegister
