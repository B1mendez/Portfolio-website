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
      threshold: 0.20,
    }
  );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));


  // var leftHeading = document.getElementById('contact-heading-left');
  // var rightHeading = document.getElementById('contact-heading-right');

  // window.addEventListener('scroll', function () {
  //   var s = window.scrollY,
  //     d = document.documentElement.scrollHeight,
  //     c = window.innerHeight;

  //   var scrollPercent = (s*2) / (d - c);

  //   // Calculate translation based on scroll percentage
  //   // You can adjust the multiplier for a stronger/weaker effect
  //   var leftTranslation = scrollPercent * -100;   // Negative to move to the left
  //   var rightTranslation = scrollPercent * 100;  // Positive to move to the right

  //   console.log(leftTranslation);
  //   console.log(rightTranslation);
  //   // Update the transform property
  //   leftHeading.style.transform = `translateX(${Math.min(leftTranslation, -86)}%)`;
  //   rightHeading.style.transform = `translateX(${Math.max(rightTranslation, 86)}%)`;
    
  // });
});

