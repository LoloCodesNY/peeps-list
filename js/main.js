"use strict";

const darkModeButton = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const backToTopButton = document.querySelector(".home-button");
const backToTopAnchor = document.querySelector("#jump-to-top");

darkModeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-mode-theme")) {
    body.classList.remove("dark-mode-theme");
    darkModeButton.innerText = "Dark Mode";
  } else {
    body.classList.add("dark-mode-theme");
    darkModeButton.innerText = "Light Mode";
  }
});

backToTopButton.addEventListener("click", function () {
  backToTopAnchor.onclick = () => window.scrollTo({ top: 0 });
});
