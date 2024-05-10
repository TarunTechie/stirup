const mongoose=require('mongoose')
const userModel=require('../models/user')
const bcrypt=require('bcrypt')
const { response } = require('express')
async function register(response)
{
    try {
        if(await userModel.find({email:response.email})==false)
        {
            const user=await userModel.create({
            name:response.name,
            email:response.email,
            password:response.password
        })
        return("Registered")
    }
    else
    {
        return("Already a User")
    }
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
        return ({reply:reply,id:user.id,name:user.name})
    }
    catch(error)
    {
        return(error)
    }
}

async function favs(response)
{
    if(response.todo=="add" && await userModel.findOne({_id:response.user,'favs.id':response.id})==null)
    {
        try
        {
            const result=await userModel.findOneAndUpdate({_id:response.user},
            {$push:{favs:
                {
                    id:response.id,
                    readyInMinutes:response.readyInMinutes,
                    servings:response.servings,
                    image:response.image,
                    title:response.title,
                    veg:response.veg,
                    summary:response.summary,
                    extendedIngredients:response.extendedIngredients,
                    nutrition:response.nutrition,
                    analyzedInstructions:response.analyzedInstructions
                }}})
                return("added")
        }
        catch(error)
        {
            console.log(error)
        }
    }
    if(response.todo=="rem")
    {
        try
        {
            const result=await userModel.findOneAndUpdate({_id:response.user},{$pull:{favs:{id:response.id}}})
            return("removed")
        }
        catch(error)
        {
            console.log(error)
        }
    }
}
async function getFavs(response)
{
    try{
        const result=await userModel.find({_id:response})
        return(result[0].favs)
    }
    catch(error)
    {
        console.log(error)
    }
}

async function meals(response,id)
{
    const clear=await userModel.findOneAndUpdate({_id:id},{$pull:{meals:{}}})
    if(await userModel.findOne({_id:id,'meals.id':response.id})==null)
    {
        try
        {
            const result=await userModel.findOneAndUpdate({_id:id},{meals:response})
            return("added")
        }
        catch(error)
        {
            console.log(error)
        }
    }
    if(response.todo=="rem")
    {
        try
        {
            const result=await userModel.findOneAndUpdate({_id:id},{$pull:{meals:{id:response.id}}})
            return("removed")
        }
        catch(error)
        {
            console.log(error)
        }
    }
}
async function getMeals(response)
{
    try{
        const result=await userModel.find({_id:response})
        return(result[0].meals)
    }
    catch(error)
    {
        console.log(error)
    }
}
module.exports={register,login,favs,getFavs,meals,getMeals}