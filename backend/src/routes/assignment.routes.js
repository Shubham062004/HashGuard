import express from 'express';
import { 
  uploadAssignment, 
  getMySubmissions, 
  getAllAssignments, 
  verifyAssignment 
} from '../controllers/assignment.controller.js';
import { protect, authorize } from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

// Student routes
router.post('/upload', protect, authorize('student'), upload.single('file'), uploadAssignment);
router.get('/', protect, authorize('student'), getMySubmissions);

// Teacher routes
router.get('/all', protect, authorize('teacher'), getAllAssignments);
router.post('/verify', protect, authorize('teacher'), verifyAssignment);

export default router;
