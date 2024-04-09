const express = require('express')
const mongo =require('mongoose')
const cors =require('cors')
const app = express()
const UserModel = require('../models/user')

app.use(express.json())
app.use(cors())

mongo.connect("mongodb://localhost:27017/User")

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        const {name,email}=user
        if(user){
            if(user.password === password){
                res.json({name,email})
            }else{
                res.json("Password was incorrect")
   
            }
        }else{
            res.json("User not found")
        }
    })
})
app.listen(5000,()=>{
    console.log("Port Connected");
})

app.get("/",(req,res)=>{
    res.render("login")
})