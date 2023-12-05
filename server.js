const express=require('express')
const serverConfig=require('./config/server.config')
const mongoose=require('mongoose')
const dbConfig=require('./config/db.config')
const app=express()

/*
Logic to connect to MongoDB and create an ADMIN user
Need to have the mongodb up and running in your local machine
*/

mongoose.connect(dbConfig.DB_URL)
const db=mongoose.connection

db.on("error",()=>{
    console.log("Error while connecting to DB");
})

db.on("error",()=>{
    console.log("DB is Connected");
})

app.listen(serverConfig.PORT,()=>{
    console.log(`server started on the port number ${serverConfig.PORT}`);
})

