import mongoose from "mongoose";
import {app} from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
   
    app.listen(process.env.PORT||8000,'0.0.0.0',()=>{
        console.log(`Server is running on  ${process.env.PORT}`);

    })
}).catch((err)=>{
    console.log("MongoDB connection failed!",err)
})
