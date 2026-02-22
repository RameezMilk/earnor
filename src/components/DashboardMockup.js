import React from "react";
import "../styles/DashboardMockup.css";
import instagramLogin from "../assets/instagram-login.jpg";

function DashboardMockup() {
  return (
    <section className="dashboard-mockup dashboard-image-mockup">
      <img src={instagramLogin} alt="Instagram Login" className="dashboard-image" />
    </section>
  );
}

export default DashboardMockup;
