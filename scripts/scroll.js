document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.10,
    }
  );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById("loading-screen");
  const header = document.getElementById("global-header");
  const main = document.getElementById("main-content");

  loadingScreen.addEventListener("animationend", function() {
    // After the animation ends, set display to none
    main.style.opacity = "1";
    header.style.opacity = "1";
  });
});



document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("hamburger-btn").addEventListener("click", function() {
      const navLinks = document.getElementById("nav-links");
      if (navLinks.style.display === "none" || navLinks.style.display === "") {
          navLinks.style.display = "flex";
      } else {
          navLinks.style.display = "none";
      }
  });
});

