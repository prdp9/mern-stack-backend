import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGO_URI = process.env.MONGO_URI

export const connectDB = async() => {
    try {
        mongoose.connect(MONGO_URI)
        console.log('MongoDB is Connected')
    } catch (error) {
        console.log('Error connecting to DB',error)
    }
}