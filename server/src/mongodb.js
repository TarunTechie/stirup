const mongoose=require('mongoose')
const userModel=require('../models/user')
const favsModel=require('../models/favs')
const bcrypt=require('bcrypt')
async function register(response)
{
    try {
        const user=await userModel.create({
            name:response.name,
            email:response.email,
            password:response.password
        }
        )
        console.log("Regsitered")
        return("Registered")
    } 
    catch (error) {
        return(error)
    }
}

async function login(response)
{
    try{
        const user=await userModel.findOne({email:response.email})
        const reply=await bcrypt.compare(response.password,user.password)
        return ({reply:reply,id:user.id})
    }
    catch(error)
    {
        return(error)
    }
}

async function favs(response)
{
    try{
        const reply=await favsModel.create({
            user:response.user,
            id:response.id,
            title:response.title,
            veg:response.veg,
            summary:response.summary,
            ingridents:response.ingridents,
            nutrition:response.nutrition,
            instructions:response.instructions
        })
    }
    catch(error)
    {
        console.log(error)
    }
}
module.exports={register,login,favs}