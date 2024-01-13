import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("MongoDB Connection Successful at db index.js");
        
    } catch (error) {
        console.log("MongoDb connection error db index.js" + error.message)
    }
}

export default dbConnect;