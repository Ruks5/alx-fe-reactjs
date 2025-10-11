import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import { Profile, ProfileDetails, ProfileSettings } from './components/Profile.jsx';

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

        {/* Protected Profile Route with Nested Routes declared here */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
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
