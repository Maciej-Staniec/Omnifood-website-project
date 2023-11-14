console.log("Hello World!");

//////////////////////////////////////////////
// Open / Close mobile nav
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

////////////////////////////////////////////////
// Automatically change footer's year

const footerYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
footerYear.textContent = currentYear;

///////////////////////////////////////////////
// Smooth scrolling animation (Safari fix)

// First, let's select all links on the page
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

// We have to loop through all these links to add add an event listener for each link.
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event_object) {
    // By default, anchor tags will take us to the indicated part of the website without scrolling animation. We need to actually stop this default behaviour in order to set up our custom smooth scrolling animation.
    event_object.preventDefault();
    console.log(event_object);

    // We need to get the value of "href" attribute and use it for scrolling to the corresponding section.
    const href = link.getAttribute("href");

    // Scroll back to top
    // The below code might not work in all Safari versions. To mitigate the issue, we can include in our HTML code a "polyfill" JS library, which implements this functionality for Safari.
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // The value of "href" attribute is actually a CSS ID selector. When we click one of the buttons with href attribute (excluding logo as its scrolling position is already set), we can store its value in a variable and based on the selector, we can scroll to ID position.

    if (href !== "#" && href.startsWith("#")) {
      const secElement = document.querySelector(href);
      // Scroll to sections
      secElement.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile nav once the link gets clicked.
      header.classList.toggle("nav-open");

      console.log(secElement);
    }
  });
});

//////////////////////////////////////////////////////
// Sticky navigation

// As soon as the hero section moves out of the view port is when we want to make the navigation sticky. That's why the section-hero element is the element we want to observe.
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
  },
  {
    // First thing is setting up the root - that is where this element should be appearing or not. Because we want to observe the hero-section inside the view port, we want to set the root to null
    root: null,
    // Alternatively, we could specify a different html element as the root and only this element would be observed.
    threshold: 1,
    // treshold specifies when the element should appear? Once the whole section is on the screen or once we scroll to its beginning (anchor point? Setting it to 1 means "show sticky menu only if the whole her-section is visible.". 0 means "make it visible only if the user can't see the hero section at all".
  }
);
obs.observe(sectionHeroEl);
