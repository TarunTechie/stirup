const express = require('express')
const mongo =require('mongoose')
const cors =require('cors')
const app = express()
const actions= require('./src/mongodb')
app.use(express.json())
app.use(cors())

mongo.connect("mongodb://localhost:27017/User")

const crypt=require('bcrypt')

async function decrypt(password,user_password){

        const ispass=await crypt.compare(password,user_password)
        return ispass
}

app.post('/register',async (req,res)=>{
    const reply=await actions.register(req.body)
    res.send(reply)
})

app.post('/login',async (req,res)=>{
    const reply=await actions.login(req.body)
    res.json(reply)
})

app.post('/favs',async (req,res)=>{
    const reply=await actions.favs(req.body)
    res.send(reply)
})

app.get('/getFavs',async(req,res)=>{
    const reply=await actions.getFavs(req.query.id)
    res.send(reply)
})
app.listen(5000,()=>{
    console.log("Server Started");
})
