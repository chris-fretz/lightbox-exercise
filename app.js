const modalBtn = document.querySelector(".btn");
const lightbox = document.querySelector(".lightbox-overlay");
const closeBtn = document.querySelector(".close-btn");
const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const item4 = document.getElementById("item-4");

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

item1.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "orange";
});

item2.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "blue";
});

item3.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "black";
});

item4.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "seagreen";
});
