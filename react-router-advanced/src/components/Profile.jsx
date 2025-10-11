import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

export function ProfileDetails() {
  return <p>This is the profile details section.</p>;
}

export function ProfileSettings() {
  return <p>This is the profile settings section.</p>;
}
