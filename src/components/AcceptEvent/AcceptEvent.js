import React from "react";
import "./AcceptEvent.css";
import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

const AcceptEvent = () => {
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
        width: 300,
        backgroundColor: "#2B2D2F",
        border: "0",
        borderRadius: 100,
      })
      .add({
        targets: ".progress-bar",
        duration: 1500,
        width: 300,
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
        backgroundColor: "#71DFBE",
      })
      .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 300,
        easing: "easeInOutSine",
      });

    $(".accept-button").click(() => {
      basicTimeline.play();
    });

    $(".text").click(() => {
      basicTimeline.play();
    });
  });

  return (
    <div id="AcceptEvent" className="center">
      <div className="title">אישור הגעה</div>

      <div className="buttons">
        <button>כן</button>
        <button>לא</button>
      </div>

      <div className="accept-button-container">
        <div className="accept-button">
          <div className="text">Submit</div>
        </div>
        <div className="progress-bar"></div>

        <svg viewBox="0 0 25 30">
          <path className="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
        </svg>

        {/*
          <svg viewBox="0 0 20 20">
            <path
              className="check"
              d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
            c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
            c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
            c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
            />
          </svg>
  */}
      </div>
    </div>
  );
};

export default AcceptEvent;
