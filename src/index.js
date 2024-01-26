// the below line is also a good approach for configuring the envirnment files but it does not maintain the consistency of the code. 

import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// require('dotenv').config()
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

dotenv.config();

// connectDB()





// require('dotenv').config({ path: './env' })
// import express from "express"


// // the better approach for writing function is ify's in jaascript

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        // app.on("error", (error) => {
        //     console.log("ERROR; ", error);
        //     throw error
        // })

        // app.listen(process.env.PORT, () => {
        //     console.log(`App is listening on port ${process.env.PORT}`);
        // })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
