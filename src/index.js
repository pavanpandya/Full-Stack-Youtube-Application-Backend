// The above code is not consistent with the code in src/index.js.
// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ 
    path: "./env" 
});

connectDB()
.then(() => {
    app.on("Error", (error) => {
        console.error("Error: ", error);
        throw error;
    });
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB Connection Failed: ", error);
});









// First Approach
/*
import express from "express";
const app = express();

// Adding ";" to avoid formatting issues
;(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("Error", () => {
            console.error("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error: ", error);
    }
})()
*/