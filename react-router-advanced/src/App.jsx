import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import { Profile } from './components/Profile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Dummy Auth State Hook
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return { isAuthenticated, login, logout };
}

// ProtectedRoute Component
function ProtectedRoute({ isAuthenticated, redirectPath = '/login', children }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

// Home Component
function Home() {
  return <h2>Home Page</h2>;
}

// Login Component
function Login({ login }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Click to Login</button>
    </div>
  );
}

// Dynamic User Profile Component
function UserProfile() {
  const { username } = useParams();
  return <h3>User Profile Page for: {username}</h3>;
}

// New BlogPost Component for dynamic blog routing
function BlogPost() {
  const { id } = useParams();
  return <h3>Blog Post Page for post ID: {id}</h3>;
}

// Main App Component
function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/user/john">John's Profile (dynamic)</Link> |{' '}
        <Link to="/blog/123">Sample Blog Post</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic User Profile */}
        <Route path="/user/:username" element={<UserProfile />} />

        {/* Dynamic Blog Post Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login */}
        <Route path="/login" element={<Login login={auth.login} />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />

        <Route
          path="profile/*"
          element={
        <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
        <Profile />
        </ProtectedRoute>
     } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
