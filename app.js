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

document.addEventListener(
  "click",
  function (e) {
    if (e.target.matches(".item-1")) {
      document.querySelector("header").style.backgroundColor = "orange";
    }
    if (e.target.matches(".item-2")) {
      document.querySelector("header").style.backgroundColor = "blue";
    }
    if (e.target.matches(".item-3")) {
      document.querySelector("header").style.backgroundColor = "black";
    }
    if (e.target.matches(".item-4")) {
      document.querySelector("header").style.backgroundColor = "seagreen";
    }
  },
  false
);
