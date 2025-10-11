// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useParams } from 'react-router-dom';

// Dummy Auth State
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

// Profile Components for Nested Routing
function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested Routes Render Here */}
    </div>
  );
}

function ProfileDetails() {
  return <p>This is the profile details section.</p>;
}

function ProfileSettings() {
  return <p>This is the profile settings section.</p>;
}

// Dynamic User Profile
function UserProfile() {
  const { username } = useParams();
  return <h3>User Profile Page for: {username}</h3>;
}

// App Component with Router & Routes
function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/user/john">John's Profile (dynamic)</Link> |{' '}
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
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          {/* Default nested route */}
          <Route index element={<ProfileDetails />} />
        </Route>

        {/* Dynamic Routing */}
        <Route path="user/:username" element={<UserProfile />} />

        {/* Login */}
        <Route path="login" element={<Login login={auth.login} />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
