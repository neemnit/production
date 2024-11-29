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

   res.json(k)
})
app.get('/niti/:id', async (req, res) => {
  const id = req.params.id; // Access the route parameter _id
  console.log(id); // Log the ID
 const v=await User.findOneAndDelete({_id:id})
 console.log(v)
  res.send(`Received ID: ${id}`); // Send a response
});
app.patch('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, // Pass the entire update object
      { new: true, runValidators: true } // Return updated doc & validate fields
    );

    if (!updatedUser) return res.status(404).send('User not found.');

    res.send(updatedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});


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
