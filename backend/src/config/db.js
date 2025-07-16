import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const uri = process.env.MONGO_URI
const ConnectDB =async()=>{
    try{
const conn=await mongoose.connect(uri)
console.log("MongoDB connected")
    }
    catch (error){
console.log(`mongo db fail ${error}`)
    }
}
export default ConnectDB