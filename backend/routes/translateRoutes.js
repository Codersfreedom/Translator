import express from 'express'
import { translateController } from '../controllers/transalteController.js';

const router = express.Router();

router.post("/translate",translateController);

export default router;