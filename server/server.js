const express = require('express')
const mongo =require('mongoose')
const cors =require('cors')
const app = express()
const path = require('path')
const fs=require('fs')
const actions= require('./src/mongodb')
app.use(express.json({limit:'50mb'}))
app.use(cors())
mongo.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/Users")
const crypt=require('bcrypt')

async function decrypt(password,user_password){

        const ispass=await crypt.compare(password,user_password)
        return ispass
}
app.post('/user',async(req,res)=>{
    const reply=await actions.user(req.body)
})
app.get('/getUser',async(req,res)=>{
    const reply=await actions.getUser(req.query.id)
    res.send(reply)
})
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

app.post('/meals',async (req,res)=>{
    const reply=await actions.meals(req.body,req.query.id)
    console.log(req.query.id)
    res.send(reply)
})

app.get('/getMeals',async(req,res)=>{
    const reply=await actions.getMeals(req.query.id)
    res.send(reply)
})

app.use(express.static(path.join(__dirname,"dist")))

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html')
    if (!fs.existsSync(indexPath))
    {
        res.status(500).send("Build files not found!!")
    }
    res.sendFile(indexPath);
});

app.listen(5000,()=>{
    console.log("Server Started on PORT:5000");
})
