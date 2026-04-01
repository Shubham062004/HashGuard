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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/student/upload" element={<UploadAssignment />} />
        <Route path="/dashboard/student/submissions/:id" element={<SubmissionDetails />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/verification" element={<Verification />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
