"use strict";

// import CSS
import "./styles/global.css";
import "./styles/main.css";

import arrow from "./images/Arrow.svg";
import { icons, menus } from "./data";
import menu from "./icon/menu.png"
import close from './icon/close.png'
import logo from './icon/DT.svg'

function getIconUrl(name) {
  return new URL(`./icon/${name}.png`, import.meta.url).href
}

function createHTMLContent() {
  const root = document.getElementById("root");

  const element = `
  <aside></aside>
  <div class='content'>
  <header></header>
  <main></main>
  <footer></footer>
  </div>
  `;

  root.insertAdjacentHTML("afterbegin", element);

  const header = document.querySelector("header");
  const sidebar = document.querySelector("aside");
  const main = document.querySelector("main");

  // Header html
  const headerHTML = `
  <div class='header__container'>
  <ul class='icons__container'>
    ${icons
      .map(
        (icon) =>
          `<li class='icon ${icon.id}'><a href="${
            icon.url
          }"><img src=${getIconUrl(icon.id)} alt="" /></a></li>`
      )
      .join("")}
  </ul>
  <img src="${arrow}" alt="" class='arrow'/>
  </div>
  `;

  header.insertAdjacentHTML("afterbegin", headerHTML);

  // Aside html

  const sidebarHTML = `
  <div class="logo"><a href="/"><img src="${logo}" alt="logo" /></a></div>
  <img class='menuBtn' src="${menu}"></img>
  <ul class='menus__container'>
    ${menus
      .map(
        (menu) =>
          `<li class="${menu.class}"><a href=""><span class='code'>< </span>${menu.label}<span class='code'> /></span></a></li>`
      )
      .join("")}
  </ul>
  `;

  sidebar.insertAdjacentHTML("afterbegin", sidebarHTML);

  // Main html
  const mainHTML =
  `
  <h1 class="hero__title">Hi there, My name is <br /><span class='hero__name'>Dave Lexter Supsup</span></h1>
  <p class='hero__intro'>I am a web developer from Philippines, Crafting websites in Javascript is my passion. I love to learn new things and try out different programming languages on projects which require it!</p>
  <a href="/contact" class="hero__btn">Contact me</a>
  `
  main.insertAdjacentHTML("afterbegin", mainHTML);
    
}

createHTMLContent();

// Hamburget function
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



// // Implementing sticky nav
// function stickyNav() {

//   const header = document.querySelector('header')

//   function sticky(entries, observer) {

//     const [entry] = entries
//     if (!entry.isIntersecting) {
//       header.style.position = 'fixed'
//       header.style.left = '0'
//     } else {
//     }
//     console.log(entry)
  
//   }
//   const options = {
//     root: null,
//     threshold: 0,
//   }


//   const headerObserver = new IntersectionObserver(sticky, options)
//   headerObserver.observe(header)
  
// }

// stickyNav()