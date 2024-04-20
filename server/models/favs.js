const mongoose=require("mongoose")
const favsSchema=new mongoose.Schema({
    user:String,
    id:String,
    image:String,
    title:String,
    veg:Boolean,
    summary:String,
    ingridents:mongoose.SchemaTypes.Mixed,
    nutrition:mongoose.SchemaTypes.Mixed,
    instructions:mongoose.SchemaTypes.Mixed
})
const favsModel = mongoose.model("favs",favsSchema)
module.exports=favsModel