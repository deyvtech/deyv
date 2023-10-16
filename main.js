"use strict";

// import CSS
import "./styles/global.css";
import "./styles/main.css";

import arrow from "./public/images/Arrow.svg";
import { icons } from "./data";


function getIconUrl(name) {
  return new URL(`./public/icon/${name}.png`, import.meta.url).href
}

function createHTMLContent() {
  const root = document.getElementById("root");
  const createMain = document.createElement("main");
  const createHeader = document.createElement("header");
  const createFooter = document.createElement("footer");
  const createSidebar = document.createElement("aside");

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

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterbegin", headerHTML);
}

createHTMLContent();
