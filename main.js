
const imageElements = document.querySelectorAll(".image-gallery img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("loaded");
    //   entry.target.setAttribute('loading','lazy')
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: "0px",
  threshold: 1
});

imageElements.forEach((imageElement) => {
  observer.observe(imageElement);
});