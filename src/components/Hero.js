import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Shaping the Future of Data Annotation</h1>
      <p className="hero-subtitle">
        Empowering young adults to earn, learn, and contribute, all within the platforms they already use.
      </p>
      <div className="hero-buttons">
        <a className="hero-btn primary" href="https://github.com/prrpavani/pearl-hacks26" target="_blank" rel="noopener noreferrer">Github</a>
        <button className="hero-btn secondary">Access Devpost</button>
      </div>
    </section>
  );
}

export default Hero;
