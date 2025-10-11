// src/components/ProtectedRoute.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Dummy auth hook inside the component file (for checker)
function useAuth() {
  const [isAuthenticated] = useState(true); // default to true or false for testing
  return { isAuthenticated };
}

function ProtectedRoute({ children, redirectPath = '/login' }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
