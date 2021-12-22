/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
// Build menu
const numberOfSections = document.getElementsByClassName("landing__container");

// make a loop to build li for navbar
for (let i = 0; i < numberOfSections.length; i++) {
  if (i == 0) {
    const htmlTextToAdd = `<a href="#section${
      i + 1
    }" class="btn active" >Section ${i + 1}</a>`;
    const mainHeading = document.querySelector("#navbar__list");
    mainHeading.insertAdjacentHTML("afterbegin", htmlTextToAdd);
  } else {
    const htmlTextToAdd = `<a href="#section${i + 1}" class="btn" >Section ${
      i + 1
    }</a>`;

    const mainHeading = document.querySelector("#navbar__list");
    mainHeading.insertAdjacentHTML("afterbegin", htmlTextToAdd);
  }
}

// Set sections as active

let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
const mainHeading2 = document.querySelector(".navbar__menu");
mainHeading2.style.cssText =
  "color: black; background-color: white; font-size: 30px";

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
