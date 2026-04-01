import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (!userInfo) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (role && userInfo.role !== role) {
    // Redirect to root if user role doesn't match
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
