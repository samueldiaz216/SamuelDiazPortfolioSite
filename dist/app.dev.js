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
}); //arrow animation

setTimeout(function () {
  gsap.to(".dash1", {
    scrollTrigger: {
      trigger: ".dash1",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".dash2", {
    scrollTrigger: {
      trigger: ".dash2",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".dash3", {
    scrollTrigger: {
      trigger: ".dash3",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".dash4", {
    scrollTrigger: {
      trigger: ".dash4",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".dash5", {
    scrollTrigger: {
      trigger: ".dash5",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".dash6", {
    scrollTrigger: {
      trigger: ".dash6",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
  gsap.to(".arrow", {
    scrollTrigger: {
      trigger: ".arrow",
      start: "top center"
    },
    opacity: 1,
    duration: 1
  });
}, 4500); //second arrow animation

gsap.to(".bio-dash1", {
  scrollTrigger: {
    trigger: ".bio-dash1",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.to(".bio-dash2", {
  scrollTrigger: {
    trigger: ".bio-dash2",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.to(".bio-dash3", {
  scrollTrigger: {
    trigger: ".bio-dash3",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.to(".bio-dash4", {
  scrollTrigger: {
    trigger: ".bio-dash4",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.to(".bio-dash5", {
  scrollTrigger: {
    trigger: ".bio-dash5",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.to(".bio-arrow", {
  scrollTrigger: {
    trigger: ".bio-arrow",
    start: "top center"
  },
  opacity: 1,
  duration: 1
});
gsap.fromTo(".globe-gif", {
  x: -500
}, {
  x: 0,
  duration: 4
});
gsap.fromTo(".globe-gif", {
  opacity: 0
}, {
  opacity: 1,
  duration: 2
});