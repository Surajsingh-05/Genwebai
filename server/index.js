import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectdb from "./config/db.js";    
import authRouter from "./route/auth.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import userRouter from "./route/user.route.js";



const app = express();

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.listen(port, () => {
    console.log("server is running port no. 3000")
    connectdb()
})