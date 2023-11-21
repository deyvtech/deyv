"use strict";

import close from '../icon/close.png'

export default function () {
    const hamburger = document.querySelector(".menuBtn");
    function toggleMenu(e) {
      e.preventDefault();
      document.querySelector(".menus__container").classList.toggle("active");
      hamburger.classList.toggle("active");
      if (hamburger.classList.contains("active")) {
        hamburger.setAttribute("src", close);
      } else {
        hamburger.setAttribute("src", menu);
      }
    };
    hamburger.addEventListener('click', toggleMenu);
}

