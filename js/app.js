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
    const htmlTextToAdd = `<a href="#section${i + 1}" data-nav="section${
      i + 1
    }" class="btn active" >Section ${i + 1}</a>`;
    const mainHeading = document.querySelector("#navbar__list");
    mainHeading.insertAdjacentHTML("afterbegin", htmlTextToAdd);
  } else {
    const htmlTextToAdd = `<a href="#section${i + 1}" data-nav="section${
      i + 1
    }" class="btn" >Section ${i + 1}</a>`;

    const mainHeading = document.querySelector("#navbar__list");
    mainHeading.insertAdjacentHTML("afterbegin", htmlTextToAdd);
  }
}

// Set sections as active

let btns = document.getElementsByClassName("btn");
let sections = document.querySelectorAll("section");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    // smooth scroll to the desired section

    event.preventDefault();
    let sec = btns[i].getAttribute("href");
    let secRef = sec.replace("#", "");
    let element = document.getElementById(secRef);
    element.scrollIntoView({ behavior: "smooth" });
  });
}
// add CSS to the navbar
const mainHeading2 = document.querySelector(".navbar__menu");
mainHeading2.style.cssText =
  "color: black; background-color: white; font-size: 30px";

// to change the active class in the section based on the window view
const navBarList = document.getElementById("navbar__list");
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeBtn = navBarList.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top <= 150 &&
      active.getBoundingClientRect().top >= -400
    ) {
      activeBtn.classList.add("active");
      active.classList.add("your-active-class");
    } else {
      activeBtn.classList.remove("active");
      active.classList.remove("your-active-class");
    }
  });
};
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
