"use strict";

const mobileNav = () => {
  const menu = document.querySelector(".menu");
  const mobileNavigation = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile__links");

  let isMobileNavOpen = false;

  menu.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNavigation.style.top = "9%";
    } else {
      mobileNavigation.style.top = "-100%";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNavigation.style.top = "-100%";
    });
  });
};

export default mobileNav;
