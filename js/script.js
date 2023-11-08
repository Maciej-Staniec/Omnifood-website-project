console.log("Hello World!");

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const closeButton = document.querySelector("ion-icon[name='close-outline']");

btnMobileNav.addEventListener("click", function () {
  console.log("mobile nav clicked!");

  header.classList.toggle("nav-open");
  // if (
  //   window.getComputedStyle(closeButton).getPropertyValue("display") === "none"
  // ) {
  //   // Add the "nav-open" class to the header
  //   header.classList.add("nav-open");
  // } else {
  //   // Remove the "nav-open" class from the header
  //   header.classList.remove("nav-open");
  // }
});

const footerYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
footerYear.textContent = currentYear;
