const button = document.querySelector("button");
const body = document.querySelector("body");
const filterButton = document.querySelector(".filters");

button.addEventListener("click", function () {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
});
