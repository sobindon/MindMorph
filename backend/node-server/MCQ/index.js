const express = require('express')
const mongoose = require('mongoose');

//import router
const mcqRouter = require('./router/mcq')

const app = express()

// Middleware to parse JSON
app.use(express.json()); 

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mcq');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()



app.use('',mcqRouter)

// Start Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});