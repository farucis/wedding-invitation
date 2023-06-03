import React from "react";
import "./BackToTopButton.css";
import $ from "jquery";
const BackToTopButton = () => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      $("#BackToTopButton").addClass("show");
    } else {
      $("#BackToTopButton").removeClass("show");
    }
  });

  const backToTopHandler = (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  };

  return <a id="BackToTopButton" onClick={backToTopHandler}></a>;
};

export default BackToTopButton;