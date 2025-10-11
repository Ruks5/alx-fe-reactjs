import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export function ProfileDetails() {
  return <p>This is the profile details section.</p>;
}

export function ProfileSettings() {
  return <p>This is the profile settings section.</p>;
}

export function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="/" element={<ProfileDetails />} /> {/* default nested route */}
      </Routes>
    </div>
  );
}
