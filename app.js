const globe = document.querySelector(".globe-gif");

if(window.innerWidth>700){
    globe.setAttribute("width", "450");
    globe.setAttribute("height", "450");
  }
  if(window.innerWidth<700){
    globe.setAttribute("width", "250");
    globe.setAttribute("height", "250");
  }
  if(window.innerWidth<600){
    globe.setAttribute("width", "220");
    globe.setAttribute("height", "220");
  }
  if(window.innerWidth<550){
    globe.setAttribute("width", "200");
    globe.setAttribute("height", "200");
  }
  if(window.innerWidth<500){
    globe.setAttribute("width", "180");
    globe.setAttribute("height", "180");
  }
  if(window.innerWidth<450){
    globe.setAttribute("width", "160");
    globe.setAttribute("height", "160");
  }
  if(window.innerWidth<400){
    globe.setAttribute("width", "130");
    globe.setAttribute("height", "130");
  }

window.addEventListener("resize", () => {
  if(window.innerWidth>700){
    globe.setAttribute("width", "450");
    globe.setAttribute("height", "450");
  }
  if(window.innerWidth<700){
    globe.setAttribute("width", "250");
    globe.setAttribute("height", "250");
  }
  if(window.innerWidth<600){
    globe.setAttribute("width", "220");
    globe.setAttribute("height", "220");
  }
  if(window.innerWidth<550){
    globe.setAttribute("width", "200");
    globe.setAttribute("height", "200");
  }
  if(window.innerWidth<500){
    globe.setAttribute("width", "180");
    globe.setAttribute("height", "180");
  }
  if(window.innerWidth<450){
    globe.setAttribute("width", "160");
    globe.setAttribute("height", "160");
  }
  if(window.innerWidth<400){
    globe.setAttribute("width", "130");
    globe.setAttribute("height", "130");
  }
});

const nav = document.querySelector("nav");
let resizeTimer;
window.addEventListener("resize", () => {
  
  nav.classList.add("resize-animation-stopper-utility");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    nav.classList.remove("resize-animation-stopper-utility");
  }, 400);
});

const btn = document.querySelector(".hamburger");
const navOptions = document.querySelector(".nav-list ul");

btn.addEventListener("click", () => {
  btn.querySelectorAll("div").forEach((bar) => bar.classList.toggle("open"));
  
  navOptions.classList.toggle("open");
});





///////////////////
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

  gsap.to(".wbm",{
    scrollTrigger:{
      trigger:".wbm",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })

  gsap.to(".oticon",{
    scrollTrigger:{
      trigger:".wbm",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })

  gsap.to(".ghost",{
    scrollTrigger:{
      trigger:".ghost",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })

  gsap.to(".portfolio",{
    scrollTrigger:{
      trigger:".portfolio",
      start:"top center"
    },
    x:-20,
    y:20,
    duration:2

  })


  //arrow animation

  setTimeout(function() {
    gsap.to(".dash1",{
      scrollTrigger:{
        trigger:".dash1",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".dash2",{
      scrollTrigger:{
        trigger:".dash2",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".dash3",{
      scrollTrigger:{
        trigger:".dash3",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".dash4",{
      scrollTrigger:{
        trigger:".dash4",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".dash5",{
      scrollTrigger:{
        trigger:".dash5",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".dash6",{
      scrollTrigger:{
        trigger:".dash6",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  
    gsap.to(".arrow",{
      scrollTrigger:{
        trigger:".arrow",
        start:"top center"
      },
      opacity:1,
      duration:1
  
    })
  }, 4500);

  

  //second arrow animation

  gsap.to(".bio-top-dash1",{
    scrollTrigger:{
      trigger:".bio-top-dash1",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-top-dash2",{
    scrollTrigger:{
      trigger:".bio-top-dash2",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-top-dash3",{
    scrollTrigger:{
      trigger:".bio-top-dash3",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-top-dash4",{
    scrollTrigger:{
      trigger:".bio-top-dash4",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-top-dash5",{
    scrollTrigger:{
      trigger:".bio-top-dash5",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-top-arrow",{
    scrollTrigger:{
      trigger:".bio-top-arrow",
      start:"top center"
    },
    opacity:1,
    duration:1

  })



  gsap.to(".bio-mid-dash",{
    scrollTrigger:{
      trigger:".bio-mid-dash",
      start:"top center"
    },
    opacity:1,
    duration:1

  })




  gsap.to(".bio-bottom-dash1",{
    scrollTrigger:{
      trigger:".bio-bottom-dash1",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-bottom-dash2",{
    scrollTrigger:{
      trigger:".bio-bottom-dash2",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-bottom-dash3",{
    scrollTrigger:{
      trigger:".bio-bottom-dash3",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-bottom-dash4",{
    scrollTrigger:{
      trigger:".bio-bottom-dash4",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-bottom-dash5",{
    scrollTrigger:{
      trigger:".bio-bottom-dash5",
      start:"top center"
    },
    opacity:1,
    duration:1

  })

  gsap.to(".bio-bottom-arrow",{
    scrollTrigger:{
      trigger:".bio-bottom-arrow",
      start:"top center"
    },
    opacity:1,
    duration:1

  })
  gsap.fromTo(".globe-gif",{x:-500},{x:0, duration:4})
  gsap.fromTo(".globe-gif",{opacity:0},{opacity:1,duration:2})
  setTimeout(()=>{
    gsap.fromTo("nav",{opacity:0},{opacity:1,duration:4})
  },2000)




  //Make contact modal pop up on button press
  let contactButton=document.querySelector(".contact-button");
  let overlay=document.querySelector(".overlay");
  let contactForm=document.querySelector(".contact-form");
  let closeButton=document.querySelector(".close-button");
  let sendButton=document.querySelector(".send-button");
  let contactFormInfo=document.querySelector(".contact-form-info");
  


  


  contactButton.addEventListener("click", () => {
    overlay.classList.toggle("active");
    contactForm.classList.toggle("active");
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.toggle("active");
    contactForm.classList.toggle("active");
  });


  let contactName=document.querySelector(".contact-name");
  let contactEmail=document.querySelector(".contact-email");
  let contactMessage=document.querySelector(".contact-message");
  let confirmationCheck=document.querySelector(".confirmation-check");
  let contactErrorMessage=document.querySelector(".contact-error-message");
  contactErrorMessage.innerHTML="";
  sendButton.addEventListener("click", () => {

    contactErrorMessage.innerHTML="";

    if(contactName.value.search(/[^\s]+/)==-1||contactEmail.value.search(/[^\s]+@[^\s]/)==-1||contactMessage.value.search(/.+/)==-1){
      if(contactName.value.search(/[^\s]+/)==-1){
        contactErrorMessage.innerHTML=contactErrorMessage.innerHTML+"Enter your name. ";
      }
      if(contactEmail.value.search(/[^\s]+@[^\s]/)){
        contactErrorMessage.innerHTML=contactErrorMessage.innerHTML+"Enter a valid email. ";
      }
      if(contactMessage.value.search(/.+/)){
        contactErrorMessage.innerHTML=contactErrorMessage.innerHTML+"Enter a message. ";
      }
      gsap.fromTo(contactErrorMessage,{opacity:0},{opacity:1, duration:1});
      gsap.fromTo(contactErrorMessage,{opacity:1},{opacity:0, duration:1, delay:1});

      
    }else{
      confirmationCheck.classList.toggle("active");
      // setTimeout(()=>{
      //   gsap.to(".contact-form", {x:3000, duration:1});
      // },300)
      setTimeout(()=>{
        overlay.classList.toggle("active");
        contactForm.classList.toggle("active");
        confirmationCheck.classList.toggle("active");
      },600)
      
      
      // contactFormInfo.submit();
    }
    
  });
  

  