import express from "express";
import { configDotenv } from "dotenv";
import v1Routes from "./routes/index.js";
import {connectDb} from "./config/db.js";
import cors from "cors";
configDotenv()

const port = process.env.PORT || 3000


const app = express();
app.use(cors());
app.use(express.json())

app.use("/v1/api",v1Routes)


app.listen(port,()=>{
    connectDb()
    console.log(`Listening to port ${port}`);
})