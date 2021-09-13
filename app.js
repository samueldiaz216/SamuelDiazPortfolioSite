

$(function() {
    $('.intro').addClass('go');
  
    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });
  })

  gsap.to(".bio-container",{
    scrollTrigger:{
      trigger:".bio-container",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })

  gsap.to(".projects-project",{
    scrollTrigger:{
      trigger:".projects-project",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })