import React from "react";
import FlipClock from "../FlipClock/FlipClock";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="aboutUs-container">
      {/*<-- Begin Content-->*/}
      <div className="container center">
        <header>
          <h1 className="subtitle">הזמנה לחתונה</h1>
        </header>
        <div className="container center">
          <h2 className="title center">פרוך & מפל</h2>
        </div>
        <h4 className="second-subtitle center">
          <li>יום רביעי, 11 אוקטובר 2023</li>
          <li>אולמי נרניה, באר שבע</li>
          <li></li>
        </h4>
      </div>
      <FlipClock />
    </section>
  );
};

export default AboutUs;
