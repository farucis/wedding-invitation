import React from "react";
import "./AboutUs.css";
import FlipClock from "./FlipClock/FlipClock";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="aboutUs-container">
      {/*<-- Begin Content-->*/}
      <div className="container center">
        <header
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="subtitle">הזמנה לחתונה</h1>
        </header>
        <div
          className="container center"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h2 className="title center">פרוך & מפל</h2>
        </div>
        <h4
          className="second-subtitle center"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <li>יום רביעי, 11 אוקטובר 2023</li>
          <li>אולמי נרניה, באר שבע</li>
        </h4>
      </div>
      <FlipClock />
    </section>
  );
};

export default AboutUs;
