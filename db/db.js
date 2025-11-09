import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Function that connects to the database
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/nmpdra"); // Wait for the connection to be established
        console.log("Database connection successful");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

export default connectDB;
