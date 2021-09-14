"use strict";

$(function () {
  $('.intro').addClass('go');
  $('.reload').click(function () {
    $('.intro').removeClass('go').delay(200).queue(function (next) {
      $('.intro').addClass('go');
      next();
    });
  });
});
gsap.to(".bio-container", {
  scrollTrigger: {
    trigger: ".bio-container",
    start: "top center"
  },
  x: -20,
  y: 20,
  duration: 2
});
gsap.to(".wbm", {
  scrollTrigger: {
    trigger: ".wbm",
    start: "top center"
  },
  x: -20,
  y: 20,
  duration: 2
});
gsap.to(".oticon", {
  scrollTrigger: {
    trigger: ".wbm",
    start: "top center"
  },
  x: -20,
  y: 20,
  duration: 2
});
gsap.to(".ghost", {
  scrollTrigger: {
    trigger: ".ghost",
    start: "top center"
  },
  x: -20,
  y: 20,
  duration: 2
});
gsap.to(".portfolio", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top center"
  },
  x: -20,
  y: 20,
  duration: 2
});