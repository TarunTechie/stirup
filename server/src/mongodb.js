const mongoose=require('mongoose')
const userModel=require('../models/user')
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
        return reply
    }
    catch(error)
    {
        return(error)
    }
}
module.exports={register,login}