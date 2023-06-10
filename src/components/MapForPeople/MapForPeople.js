import React from "react";
import "./MapForPeople.css";
const MapForPeople = () => {
  return (
    <div id="MapForPeople" className="center">
      <div className="top-img-container">
        <div className="top-img" />
      </div>
      <h4 className="container-title" data-aos="fade-up">
        מקום
      </h4>
      <div className="container-info" data-aos="fade-up">
        <h2 > החתונה תתקיים באולמי נרניה</h2>
        <h2> המנוף 3, באר שבע, ישראל</h2>
      </div>
      <div className="" data-aos="fade-up">
        <iframe
          title="googlemaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5424811251332!2d34.81456107344822!3d31.22758965264819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502662ef2ae16bb%3A0x9f79d9521fd6aa26!2z15DXldec157XmSDXoNeo16DXmdeU!5e0!3m2!1siw!2sil!4v1685821768869!5m2!1siw!2sil"
          width="700"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container-button" data-aos="fade-up">
        <a
          href="https://www.google.com/maps/dir//%D7%90%D7%95%D7%9C%D7%9E%D7%99+%D7%A0%D7%A8%D7%A0%D7%99%D7%94+%D7%94%D7%9E%D7%A0%D7%95%D7%A3+3+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2%E2%80%AD%E2%80%AD/@31.2275,34.8116667,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1502662ef2ae16bb:0x9f79d9521fd6aa26!2m2!1d34.8117581!2d31.2278325?entry=ttu"
          className="button btn-primary"
        >
          <i className="button-text"></i>
          &nbsp;&nbsp;נצא לדרך
        </a>
      </div>
    </div>
  );
};

export default MapForPeople;
