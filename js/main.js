"use strict";

const darkModeButton = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const backToTopButton = document.querySelector(".home-button");
const container = document.querySelector(".container");
const peepsList = document.querySelector("ol");
const sortByHoliday = document.querySelector(".select");
const holidayOption = document.querySelector(".filter-option");
const peepListItems = document.querySelectorAll(".peep");
let selection = "All Flavors";
const jumpToFooterButton = document.querySelector(".footer-button");

//Dark mode

darkModeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-mode-theme")) {
    body.classList.remove("dark-mode-theme");
    darkModeButton.classList.remove("light-mode");
    darkModeButton.classList.add("dark-mode");
    darkModeButton.innerText = "Dark Mode";
  } else {
    body.classList.add("dark-mode-theme");
    darkModeButton.classList.add("light-mode");
    darkModeButton.innerText = "Light Mode";
  }
});

//Scroll to top button, jump to footer button

backToTopButton.onclick = () => window.scrollTo({ top: 0 });
// jumpToFooterButton.onclick = () => window.scrollTo({ top: 500 });
jumpToFooterButton.onclick = () =>
  window.scrollTo(0, document.body.scrollHeight);

//Infinite scroll and load more button

//Sort by holiday: Halloween, Christmas, Easter

// sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "Halloween") {
//     if (!peepListItems.classList.contains("Halloween")) {
//     }
//     peepListItems.classList.add("hide");
//   }
// });

// sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "Halloween") {
//     for (let peep of peepListItems) {
//       if (!peep.classList.contains("halloween")) {
//         peep.classList.add("hide");
//       }
//     }
//   }
// });

// sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "Christmas") {
//     for (let peep of peepListItems) {
//       if (peep.classList.contains("hide")) {
//         peep.classList.remove("hide");
//       }
//       if (!peep.classList.contains("christmas")) {
//         peep.classList.add("hide");
//       }
//     }
//   }
// });

// sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "Easter") {
//     for (let peep of peepListItems) {
//       if (!peep.classList.contains("easter")) {
//         peep.classList.add("hide");
//       }
//     }
//   }
// });

// const allFlavorsSort = sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "All Flavors") {
//     for (let peep of peepListItems) {
//       peep.classList.remove("hide");
//     }
//   }
// });

// sortByHoliday.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "Halloween") {
//     for (let peep of peepListItems) {
//       if (peep.classList.contains("halloween")) {
//         console.log(peep);
//         return peep;
//       }
//     }
//   }
// });
