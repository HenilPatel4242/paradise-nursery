

import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "./ProductList.html";
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, your destination for beautiful houseplants.</p>
        <p>
          Bring your home to life with our collection of indoor plants.
        </p>
        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
