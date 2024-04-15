const mongoose=require("mongoose")
const favsSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    id:String,
    title:String,
    veg:Boolean,
    summary:String,
    ingridents:[String],
    details:[String],
    instructions:String
})
const favsModel = mongo.model("favs",favsSchema)
module.exports=favsModel