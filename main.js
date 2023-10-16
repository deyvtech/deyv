"use strict";

// import CSS
import "./styles/global.css";
import "./styles/main.css";

import arrow from "./public/images/Arrow.svg";
import { icons } from "./data";
import menu from "./public/icon/menu.png"

function getIconUrl(name) {
  return new URL(`./public/icon/${name}.png`, import.meta.url).href
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
  <img class='menu' src="${menu}"></img>
  `

  sidebar.insertAdjacentHTML('afterbegin', sidebarHTML)

}

createHTMLContent();
