// src/App.jsx
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "lightgray" }}>
      {/* Welcome Section */}
      <div style={{ padding: "10px", textAlign: "center", backgroundColor: "white" }}>
        <WelcomeMessage />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* User Profiles Section */}
      <div style={{ padding: "10px", backgroundColor: "white", margin: "10px" }}>
        <h1 style={{ textAlign: "center", color: "black" }}>User Profiles</h1>
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <UserProfile name="Bob" age={30} bio="Enjoys painting and traveling" />
        <UserProfile name="Charlie" age={28} bio="Passionate about coding and football" />
      </div>
      {/* Counter Section */}
      <div style={{ padding: "2rem", backgroundColor: "#eef" }}>
        <Counter />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
