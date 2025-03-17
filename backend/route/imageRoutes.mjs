import express from 'express';
import { generateImages } from '../controller/imageController.mjs';
import upload from '../middleware/upload.mjs';

const router = express.Router();

router.post('/generate', upload.single('image'), generateImages);

export default router;