import React from "react";
import "./AcceptEvent.css";
import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

const AcceptEvent = () => {
  return (
    <div id="AcceptEvent" className="center">
      <div className="title">אישור הגעה</div>

      <div className="buttons-container">
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

const AcceptBtn = (props) => {
  $(document).ready(() => {
    var basicTimeline = anime.timeline({
      autoplay: false,
    });

    var pathEls = $(".check");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
    }

    $(".accept-button").click((e) => {
      let selecedBtnId = e.target.parentNode.id
        ? e.target.parentNode.id
        : e.target.parentNode.parentNode.id;

        selecedBtnId[3] == 0 ? $("#btn1").remove() : $("#btn0").remove();

      basicTimeline
        .add({
          targets: ".text",
          duration: 1,
          opacity: "0",
        })
        .add({
          targets: ".accept-button",
          duration: 1300,
          height: 10,
          width: 200,
          backgroundColor: "#2B2D2F",
          border: "0",
          borderRadius: 100,
          zIndex: "0",
        })
        .add({
          targets: ".progress-bar",
          duration: 1500,
          width: 200,
          easing: "linear",
        })
        .add({
          targets: ".accept-button",
          width: 0,
          duration: 1,
        })
        .add({
          targets: ".progress-bar",
          width: 80,
          height: 80,
          delay: 400,
          duration: 750,
          borderRadius: 80,
          backgroundColor: selecedBtnId[3] == 0 ? "#71DFBE" : "#F44336",
          zIndex: "0",
        })
        .add({
          targets: pathEls[selecedBtnId[3]],
          strokeDashoffset: [offset, 0],
          duration: 300,
          easing: "easeInOutSine",
        });

      basicTimeline.play();
    });
  });

  return (
    <div className="accept-button-container" id={`btn${props.index}`}>
      <div className="accept-button">
        <div className="text">{props.button.name}</div>
      </div>

      <div className="progress-bar"></div>

      <svg viewBox={props.button.viewBox}>
        <path className="check" d={props.button.path} />
      </svg>
    </div>
  );
};
