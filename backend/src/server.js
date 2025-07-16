import express from "express"
import routes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import  ConnectDB from "./config/db.js"
import cors from "cors"
const app=express();
dotenv.config()
const port =process.env.PORT || 5006
app.use(express.json());
app.use(cors());
 ConnectDB();
app.use("/api/auth",routes);

app.listen((port),()=>{
    console.log(`server is running on port ${port}`)
})