import express from "express";
import { getLanguages } from "../controllers/languageController.js";

const router = express.Router()
router.post("/getLanguages",getLanguages);

export default router