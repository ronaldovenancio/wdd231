/* Current Date & Last Modified Code */
const outputDate = document.querySelector("#currentYear");
const outputModified = document.querySelector("#lastModified");

const date = new Date().getFullYear();
let lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;

// Store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const navBar = document.querySelector('#nav-bar');

