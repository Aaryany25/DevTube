import mongoose from "mongoose"
import { DB_Name } from "../constants.js"
// import dotenv from "dotenv";

// dotenv.config({path:'./.env'})

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
        console.log(`\n MongoDb connection on DB host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error :",error)
        process.exit(1)
    }
}

export default connectDB