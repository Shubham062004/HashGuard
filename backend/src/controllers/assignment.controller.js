import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import Assignment from '../models/assignment.model.js';
import { generateSHA256Hash } from '../utils/hash.js';

// @desc    Upload assignment with SHA-256 hashing
// @route   POST /api/assignments/upload
// @access  Private
export const uploadAssignment = async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload a file' });
    }

    if (!title) {
      return res.status(400).json({ success: false, message: 'Please provide a title' });
    }

    // Read the file buffer to generate hash
    const fileBuffer = fs.readFileSync(req.file.path);
    const hash = generateSHA256Hash(fileBuffer);

    // Create the database record
    const assignment = await Assignment.create({
      title,
      fileUrl: req.file.path,
      fileName: req.file.originalname,
      hash,
      uploadedBy: req.user._id, // Set by protect middleware
      timestamp: Date.now(),
    });

    res.status(201).json({
      success: true,
      message: 'Assignment uploaded and hashed successfully',
      data: {
        _id: assignment._id,
        title: assignment.title,
        hash: assignment.hash,
        fileUrl: assignment.fileUrl,
        timestamp: assignment.timestamp,
      }
    });

  } catch (error) {
    console.error('SERVER ERROR IN UPLOAD:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get user-specific submissions
// @route   GET /api/assignments
// @access  Private
export const getMySubmissions = async (req, res) => {
  try {
    const submissions = await Assignment.find({ uploadedBy: req.user._id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });

  } catch (error) {
    console.error('SERVER ERROR IN GET SUBMISSIONS:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
