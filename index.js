const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('<h2>Nitish</h2>')
    
})
const port=3000
app.listen(process.env.PORT || port,()=>{
    console.log("server started");
    
})