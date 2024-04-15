const mongoose=require('mongoose')
const userModel=require('../models/user')
const bcrypt=require('bcrypt')
async function register(response)
{
    try {
        const user=await userModel.create({
            name:response.name,
            email:response.mail,
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
        const user=await userModel.findOne({name:response.name})
        console.log(user)
    }
    catch(error)
    {
        return(error)
    }
}
module.exports={register,login}