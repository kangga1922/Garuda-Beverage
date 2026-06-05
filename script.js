history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => loader.style.display = "none", 500);
    }, 800);
  }
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

const videoBtn = document.getElementById("videoBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");

if (videoBtn && videoPopup && closeVideo) {
  videoBtn.addEventListener("click", () => {
    videoPopup.style.display = "flex";
  });

  closeVideo.addEventListener("click", () => {
    videoPopup.style.display = "none";
    const video = videoPopup.querySelector("video");
    if (video) video.pause();
  });

  videoPopup.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
      videoPopup.style.display = "none";
      const video = videoPopup.querySelector("video");
      if (video) video.pause();
    }
  });
}

const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  const menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
      menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
  });

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
  });
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  setInterval(changeSlide, 4000);
}