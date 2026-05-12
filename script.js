// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

  }, 2000);

});

// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// ==========================
// GLOW EFFECT
// ==========================

const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 150 + "px";
  glow.style.top = e.clientY - 150 + "px";

});

// ==========================
// MAGNETIC BUTTON EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("mousemove", (e) => {

    const rect = btn.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    btn.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "translate(0px,0px)";

  });

});

// ==========================
// SCROLL REVEAL
// ==========================

ScrollReveal({

  distance: "120px",
  duration: 2000,
  delay: 200,
  reset: false

});

ScrollReveal().reveal(".hero-content", {
  origin: "top"
});

ScrollReveal().reveal(".service-box", {
  origin: "bottom",
  interval: 200
});

ScrollReveal().reveal(".project-card", {
  origin: "bottom",
  interval: 200
});

ScrollReveal().reveal(".pricing-card", {
  origin: "bottom",
  interval: 200
});

ScrollReveal().reveal(".contact-box", {
  origin: "bottom"
});

// ==========================
// PARALLAX HERO VIDEO
// ==========================

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  const heroVideo =
    document.querySelector(".hero-video");

  heroVideo.style.transform =
    `translateY(${scroll * 0.35}px) scale(1.1)`;

});

// ==========================
// NAVBAR EFFECT
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 80){

    header.style.background =
      "rgba(0,0,0,0.75)";

    header.style.backdropFilter =
      "blur(20px)";

    header.style.borderBottom =
      "1px solid rgba(255,255,255,0.08)";

  }

  else{

    header.style.background =
      "rgba(0,0,0,0.2)";

    header.style.borderBottom =
      "1px solid transparent";

  }

});

// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 200;

    const sectionHeight =
      section.clientHeight;

    if(pageYOffset >= sectionTop){

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      .includes(current)
    ){

      link.classList.add("active");

    }

  });

});

// ==========================
// PROJECT CARD LIGHT EFFECT
// ==========================

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,0.15),
      transparent 40%)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "transparent";

  });

});

// ==========================
// HERO TITLE INTRO
// ==========================

const heroTitle =
  document.querySelector(".hero-content h1");

window.addEventListener("load", () => {

  heroTitle.style.opacity = "0";

  heroTitle.style.transform =
    "translateY(80px)";

  setTimeout(() => {

    heroTitle.style.transition =
      "1.5s ease";

    heroTitle.style.opacity = "1";

    heroTitle.style.transform =
      "translateY(0px)";

  }, 500);

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    window.scrollTo({

      top: target.offsetTop - 80,
      behavior: "smooth"

    });

  });

});

// ==========================
// FLOATING GLOW ANIMATION
// ==========================

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {

  glowX = e.clientX;
  glowY = e.clientY;

});

function animateGlow(){

  glow.style.left =
    glowX - 150 + "px";

  glow.style.top =
    glowY - 150 + "px";

  requestAnimationFrame(animateGlow);

}

animateGlow();

// ==========================
// RANDOM FLOAT EFFECT
// ==========================

const serviceBoxes =
  document.querySelectorAll(".service-box");

serviceBoxes.forEach((box, index) => {

  box.style.animation =
    `floating 4s ease-in-out infinite`;

  box.style.animationDelay =
    `${index * 0.5}s`;

});

// ==========================
// TYPING EFFECT
// ==========================

const subtitle =
  document.querySelector(".hero-content span");

const text =
  "MODERN WEBSITE STUDIO";

let i = 0;

subtitle.innerHTML = "";

function typingEffect(){

  if(i < text.length){

    subtitle.innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect, 80);

  }

}

typingEffect();

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
  "%cENVA STUDIO",
  "color:white;font-size:40px;font-weight:bold;"
);

console.log(
  "%cModern Website Studio by Fadli Yurisman",
  "color:gray;font-size:14px;"
);