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
    //add and remove favourites
   if(response.todo=="add"){
     try{
        if(await favsModel.find({id:response.id})==false)
       { const reply=await favsModel.create({
            user:response.user,
            id:response.id,
            image:response.image,
            title:response.title,
            veg:response.veg,
            summary:response.summary,
            ingridents:response.ingridents,
            nutrition:response.nutrition,
            instructions:response.instructions})
            return reply
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
    if(response.todo=="rem")
    {
        try{
            const reply=await favsModel.deleteOne({id:response.id})
        }
        catch(error)
        {
            console.log(error)
        }
    }
}


async function getFavs(response)
{
    console.log(response)
    const reply=await favsModel.find({user:response})
    return(reply)
}
module.exports={register,login,favs,getFavs}