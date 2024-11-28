const express=require('express')
const app=express()
const mongoose=require('mongoose')
const User=require('./models/user')
require('dotenv').config();


const uri = process.env.MONGO_URI;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h2>Nitish</h2>')
    
})
app.get('/user',async(req,res)=>{

   await User.create({
    user:req.body.user
   })
   res.status(201).send("created")
  
})
app.get('/niti',async(req,res)=>{
  const k= await User.find({})
  console.log(k)
   res.json(k)
})
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));


const port=3000
app.listen(process.env.PORT || port,()=>{
    console.log("server started");
    
})















// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
