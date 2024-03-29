const express =require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const body=require('body-parser')
app.use(body.json())
app.get('/api/login',(req,res)=>{
    res.json( {"dependencies": {
        "express": "^4.18.3",
        "mongodb": "^6.5.0",
        "nodemon": "^3.1.0"
      }})
    console.log("gott")
})
app.listen(5000,()=>{console.log("Server Started")})
