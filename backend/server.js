const express =require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const body=require('body-parser')
app.use(body.json())
app.post('/api/register',(req,res)=>{
    console.log(req.body)
})
app.listen(5000,()=>{console.log("Server Started")})
