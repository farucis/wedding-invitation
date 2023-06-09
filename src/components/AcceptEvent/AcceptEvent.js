import React from "react";
import "./AcceptEvent.css";
import AcceptBtn from "./AcceptBtn/AcceptBtn";

const AcceptEvent = () => {
  return (
    <div id="AcceptEvent" className="center">
      <div className="container-title" data-aos="fade-up">אישור הגעה</div>

      <div className="buttons-container" >
        {buttonsDB.map((button, index) => {
          return <AcceptBtn button={button} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default AcceptEvent;

const buttonsDB = [
  {
    name: "כן",
    path: "M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2",
    viewBox: "0 0 25 30",
  },
  {
    name: "לא",
    path: "M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z",
    viewBox: "0 0 20 20",
  },
];
