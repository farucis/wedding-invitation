import React, { useState } from "react";
import "./AcceptBtn.css";

import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

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
          duration: 700,
          width: 200,
          easing: "linear",
        });

      if (selecedBtnId[3] == 0) {
        basicTimeline
          .add({
            targets: ".progress-bar",
            width: 0,
            duration: 1,
          })

          .add({
            targets: ".accept-button",
            height: 300,
            width: 400,
            borderRadius: 4,
            duration: 600,
            zIndex: "-1",
          })
          .add({
            targets: ".form",
            opacity: "1",
            height: 200,
            width: 300,
            borderRadius: 4,
            duration: 200,
            zIndex: "99",
          });
      } else {
        basicTimeline
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
            backgroundColor: "#F44336",
            zIndex: "0",
          })
          .add({
            targets: pathEls[1],
            strokeDashoffset: [offset, 0],
            duration: 300,
            opacity: "1",
            easing: "easeInOutSine",
          });
      }

      basicTimeline.play();
    });
    $(".submit").click((e) => {
      e.preventDefault();
      if (!$(".input").val()) $(".input").val(1);
      if ($(".input").val() > 0 && $(".input").val() < 12) {
        console.log($(".input").val());
        var submitTimeline = anime.timeline({
          autoplay: false,
        });
        submitTimeline
          .add({
            targets: ".form",
            opacity: "0",
            height: 0,
            width: 0,
            duration: 50,
            zIndex: "-1",
          })
          .add({
            targets: ".accept-button",
            duration: 900,
            height: 10,
            width: 200,
            backgroundColor: "#2B2D2F",
            border: "0",
            borderRadius: 100,
            zIndex: "1",
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
            backgroundColor: "#71DFBE",
            zIndex: "0",
          })
          .add({
            targets: pathEls[0],
            strokeDashoffset: [offset, 0],
            duration: 300,
            opacity: "1",
            easing: "easeInOutSine",
          });

        submitTimeline.play();



      }
    });
  });
  return (
    <div className="accept-button-container" id={`btn${props.index}`}>
      <div className="accept-button">
        <div className="text">{props.button.name}</div>
      </div>

      <form className="form">
        <h1>?כמה תהיו</h1>
        <input
          className="input"
          type="text"
          pattern="[0-9]*"
          placeholder="1"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <input type="submit" className="submit" />
      </form>

      <div className="progress-bar"></div>

      <svg viewBox={props.button.viewBox}>
        <path className="check" d={props.button.path} />
      </svg>
    </div>
  );
};

export default AcceptBtn;
