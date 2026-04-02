import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import Assignment from '../models/assignment.model.js';
import { generateSHA256Hash } from '../utils/hash.js';

// @desc    Upload assignment with SHA-256 hashing
// @route   POST /api/assignments/upload
// @access  Private (Student only)
export const uploadAssignment = async (req, res) => {
  try {
    // Role check (redundant if middleware is used but good for safety)
    if (req.user.role !== 'student') {
      return res.status(403).json({ success: false, message: 'Only students can upload assignments' });
    }

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
// @access  Private (Student)
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

// @desc    Get all submissions (for teachers)
// @route   GET /api/assignments/all
// @access  Private (Teacher only)
export const getAllAssignments = async (req, res) => {
  try {
    const submissions = await Assignment.find({})
      .populate('uploadedBy', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });

  } catch (error) {
    console.error('SERVER ERROR IN GET ALL SUBMISSIONS:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Verify assignment integrity
// @route   POST /api/assignments/verify
// @access  Private (Teacher only)
export const verifyAssignment = async (req, res) => {
  try {
    const { assignmentId, providedHash } = req.body;

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ success: false, message: 'Assignment not found' });
    }

    // Verify system integrity: Re-hash the file currently on the server
    let currentServerHash = '';
    if (fs.existsSync(assignment.fileUrl)) {
      const fileBuffer = fs.readFileSync(assignment.fileUrl);
      currentServerHash = generateSHA256Hash(fileBuffer);
    } else {
      return res.status(404).json({ success: false, message: 'Source file not found on server' });
    }

    // A file is authentic if:
    // 1. The document currently on server matches the original hash in DB
    // 2. The provided hash from the auditor matches the original hash in DB
    const isServerFileAuthentic = currentServerHash === assignment.hash;
    const isProvidedHashMatch = assignment.hash === providedHash;
    const isAuthentic = isServerFileAuthentic && isProvidedHashMatch;

    res.json({
      success: true,
      authentic: isAuthentic,
      systemIntegrity: isServerFileAuthentic,
      message: isAuthentic 
        ? 'Verification successful. Cryptographic seal remains intact.' 
        : !isServerFileAuthentic 
          ? 'CRITICAL ALERT: Server file integrity failure. The stored file has been modified.' 
          : 'Verification failed. The provided signature does not match our records.',
      data: {
        title: assignment.title,
        originalHash: assignment.hash,
        serverFileHash: currentServerHash,
        providedHash: providedHash
      }
    });

  } catch (error) {
    console.error('SERVER ERROR IN VERIFY:', error.message);
    res.status(500).json({ success: false, message: 'Error during cryptographic verification audit.' });
  }
};
