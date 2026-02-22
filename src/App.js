import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardMockup from "./components/DashboardMockup";
import Aurora from "./components/Aurora";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <Aurora
        colorStops={["#800000", "#ff003c", "#ff4e6a"]}
        blend={0.5}
        amplitude={1.1}
        speed={0.8}
      />
      <Navbar />
      <div className="main-landing-group">
        <Hero />
        <DashboardMockup />
      </div>
    </div>
  );
}

export default App;
