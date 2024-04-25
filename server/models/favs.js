const mongoose=require("mongoose")
const favsSchema=new mongoose.Schema({
    user:String,
    id:String,
    image:String,
    title:String,
    readyInMinutes:String,
    servings:String,
    veg:Boolean,
    summary:String,
    extendedIngredients:mongoose.SchemaTypes.Mixed,
    nutrition:mongoose.SchemaTypes.Mixed,
    analyzedInstructions:mongoose.SchemaTypes.Mixed
})
const favsModel = mongoose.model("favs",favsSchema)
module.exports=favsModel