const express=require('express')
const serverConfig=require('./config/server.config')
const mongoose=require('mongoose')
const dbConfig=require('./config/db.config')
const userModel=require('./models/user.model')
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

db.on("open",()=>{
    console.log("DB is Connected");

    init();
})

async function init(){


    //check if the admin user is already present
    let admin=userModel.findOne({
        userId:"admin"
    })

    if(admin){
        console.log("Admin user already present")
        return;
    }
    /*
     Initialize the mongo db

     Need to create the ADMIN user
    */

    admin= await userModel.create({
        name:"knight12",
        userId:"admin",
        email:"knight143@gmail.com",
        userType:"ADMIN",
        password:"Welcome1"
     })

     console.log(admin)
}

app.listen(serverConfig.PORT,()=>{
    console.log(`server started on the port number ${serverConfig.PORT}`);
})


