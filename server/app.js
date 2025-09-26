const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express()
dotEnv.config()

const cors = require("cors");
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);


const PORT = process.env.PORT || 5005

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Conneted Successfully")
}).catch((error)=>{
    console.log(error)
})

app.listen(PORT, ()=>{
    console.log(`Server Started and Running at ${PORT}`)
})