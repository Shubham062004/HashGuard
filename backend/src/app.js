import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import assignmentRoutes from './routes/assignment.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow cross-origin static files (uploads)
}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Serve static files from uploads/
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
