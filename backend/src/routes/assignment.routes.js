import express from 'express';
import { uploadAssignment, getMySubmissions } from '../controllers/assignment.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

// Protected routes
router.post('/upload', protect, upload.single('file'), uploadAssignment);
router.get('/', protect, getMySubmissions);

export default router;
