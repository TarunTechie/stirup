const mongo=require('mongoose')
const UserSchema = new mongo.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel = mongo.model("user",UserSchema)
module.exports=UserModel