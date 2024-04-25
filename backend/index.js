import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import translateRoutes from "./routes/translateRoutes.js";
import languagesRoutes from "./routes/languagesRoutes.js";
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use("/api",translateRoutes);
app.use("/api",languagesRoutes);
app.use(express.static(path.join(__dirname,"frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})