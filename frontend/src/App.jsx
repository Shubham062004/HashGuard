import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import StudentDashboard from './pages/StudentDashboard';
import UploadAssignment from './pages/UploadAssignment';
import SubmissionDetails from './pages/SubmissionDetails';
import TeacherDashboard from './pages/TeacherDashboard';
import Verification from './pages/Verification';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Student Routes */}
        <Route 
          path="/dashboard/student" 
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/student/upload" 
          element={
            <ProtectedRoute role="student">
              <UploadAssignment />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/student/submissions/:id" 
          element={
             <ProtectedRoute role="student">
              <SubmissionDetails />
             </ProtectedRoute>
          } 
        />
        
        {/* Protected Teacher Routes */}
        <Route 
          path="/dashboard/teacher" 
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* General Protected Routes */}
        <Route 
          path="/dashboard/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="/verification" element={<Verification />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
