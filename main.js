"use strict";

// import CSS
import "./styles/global.css";
import "./styles/main.css";

import arrow from "./images/Arrow.svg";
import { icons, menus } from "./data";
import menu from "./icon/menu.png"
import close from './icon/close.png'

function getIconUrl(name) {
  return new URL(`./icon/${name}.png`, import.meta.url).href
}

function createHTMLContent() {
  const root = document.getElementById("root");
  


  const element =
  `
  <aside></aside>
  <div class='content'>
  <header></header>
  <main></main>
  <footer></footer>
  </div>
  `

  root.insertAdjacentHTML('afterbegin', element)


  const header = document.querySelector("header");
  const sidebar = document.querySelector('aside')

  // Header html
  const headerHTML = `
  <div class='header__container'>
  <ul class='icons__container'>
    ${icons.map(icon => (
      `<li class='icon ${icon.id}'><a href="${icon.url}"><img src=${getIconUrl(icon.id)} alt="" /></a></li>`
    )).join('')}
  </ul>
  <img src="${arrow}" alt="" class='arrow'/>
  </div>
  `;

  header.insertAdjacentHTML("afterbegin", headerHTML);

  // Aside html

  const sidebarHTML = `
  <img class='menuBtn' src="${menu}"></img>
  <ul class='menus__container'>
    ${menus.map(menu => (
      `<li class="${menu.class}"><a href=""><span class='code'>< </span>${menu.label}<span class='code'> /></span></a></li>`
    )).join('')}
  </ul>
  `

  sidebar.insertAdjacentHTML('afterbegin', sidebarHTML)

}

createHTMLContent();

const hamburger = document.querySelector('.menuBtn')
function toggleMenu(e) {
  e.preventDefault()
  document.querySelector('.menus__container').classList.toggle('active')
  hamburger.classList.toggle('active')
  if (hamburger.classList.contains('active')) {
    hamburger.setAttribute('src', close)
  } else {
    hamburger.setAttribute('src', menu)
    
  }
}

hamburger.addEventListener('click', toggleMenu)