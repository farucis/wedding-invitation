import React from "react";
import "./InvitationInfo.css";

const InvitationInfo = () => {
  return (
    <div id="InvitationInfo" className="center">
      <h3 data-aos="fade-up" className="container-title">
        הזמנה
      </h3>
      <h2 data-aos="zoom-in-right">
        אנו נרגשים להזמינכם לחגוג עמנו את יום נישואינו
      </h2>
      <h1 data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400">
        Faruch & Mapal
      </h1>
      <h2 data-aos="zoom-in-right">שיערך ביום רביעי, כ"ז תשרי ה'תשפ"ד </h2>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        11.10.2023
      </h1>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="80"
        data-aos-delay="200"
        className="divider-img"
      />
    </div>
  );
};

export default InvitationInfo;
