import express from 'express'
import { translateController } from '../controllers/transalteController.js';

const router = express.Router();

router.get("/translate",translateController);

export default router;