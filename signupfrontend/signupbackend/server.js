require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require("./db")
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')


//database connection
connection();


//middlewares

app.use(express.json())
app.use(cors())

// routes

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);


const port = process.env.PORT||4000;
app.listen(port, console.log(`server is up and running on ${port}...`))