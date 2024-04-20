import express from "express"
import cors from "cors";
import dotenv from "dotenv";

import translateRoutes from "./routes/translateRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api",translateRoutes);

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})