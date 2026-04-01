import User from '../models/user.model.js';
import generateToken from '../utils/token.js';

// Signup Controller
export const register = async (req, res) => {
  console.log('--- SIGNUP REQUEST RECEIVED ---');
  console.log('Request Body:', req.body);

  const { name, email, password, role } = req.body;

  try {
    // Validate input
    if (!name || !email || !password || !role) {
      console.log('Validation Error: Missing fields');
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log(`Error: User with email ${email} already exists`);
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    if (user) {
      console.log('SUCCESS: User created successfully');
      res.status(201).json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      console.log('Error: Failed to create user (unknown reason)');
      res.status(400).json({ success: false, message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('SERVER ERROR IN SIGNUP:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login Controller
export const login = async (req, res) => {
  console.log('--- LOGIN REQUEST RECEIVED ---');
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      console.log('Validation Error: Missing email or password');
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Check email exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`Error: No user found for email ${email}`);
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      console.log('Error: Incorrect password provided');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Success response
    console.log('SUCCESS: Login successful for', user.email);
    res.json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error('SERVER ERROR IN LOGIN:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
