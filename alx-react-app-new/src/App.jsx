// src/App.jsx
import { useState } from 'react';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div 
      style={{ 
        fontFamily: "Arial, sans-serif", 
        backgroundColor: "#f0f4f8", 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column" 
      }}
    >
      {/* Welcome Section */}
      <div style={{ padding: "1rem", textAlign: "center", backgroundColor: "#e3f2fd" }}>
        <WelcomeMessage />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* User Profiles Section */}
      <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "1.5rem" }}>User Profiles</h1>
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <UserProfile name="Bob" age={30} bio="Enjoys painting and traveling" />
        <UserProfile name="Charlie" age={28} bio="Passionate about coding and football" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
