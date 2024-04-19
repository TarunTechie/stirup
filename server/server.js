const express = require('express')
const mongo =require('mongoose')
const cors =require('cors')
const app = express()
const actions= require('./src/mongodb')
const UserModel = require('./models/user')
app.use(express.json())
app.use(cors())

mongo.connect("mongodb://localhost:27017/User")

const crypt=require('bcrypt')

async function decrypt(password,user_password){

        const ispass=await crypt.compare(password,user_password)
        return ispass
}

app.post('/register',async (req,res)=>{
    console.log("REGISTERED")
    const reply=await actions.register(req.body)
    console.log(reply)
    res.send(reply)
})

app.get('/login',async (req,res)=>{
    const reply=await actions.login(req.body)
    res.send(reply)
})

app.listen(5000,()=>{
    console.log("Server Started");
})
