const modalBtn = document.querySelector(".btn");
const lightbox = document.querySelector(".lightbox-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  lightbox.classList.add("open-lightbox");
});

closeBtn.addEventListener("click", function () {
  lightbox.classList.remove("open-lightbox");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    lightbox.classList.remove("open-lightbox");
  }
});

function changeHeaderColor(color) {
  document.querySelector("header").style.backgroundColor = color;
}
