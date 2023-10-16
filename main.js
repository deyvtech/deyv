"use strict";

// import CSS
import "./styles/global.css";
import "./styles/main.css";

import arrow from "./public/images/Arrow.svg";
import { icons } from "./data";




function createHTMLContent() {
  const root = document.getElementById("root");
  const createMain = document.createElement("main");
  const createHeader = document.createElement("header");
  const createFooter = document.createElement("footer");

  root.appendChild(createMain).classList.add("main-container");
  root.insertAdjacentElement("afterbegin", createHeader);
  root.insertAdjacentElement("beforeend", createFooter);

  const headerHTML = `
  <div class='header__container'>
  <ul class='icons__container'>
    ${icons.map(icon => (
      `<li class='icon ${icon.id}'><a href="${icon.url}"><img src=${icon.urlFolder} alt="" /></a></li>`
    )).join('')}
  </ul>
  <img src="${arrow}" alt="" class='arrow'/>
  </div>
  `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterbegin", headerHTML);

  const mainEl = document.querySelector(".main-container");
  const html = `
  <div class="sidebar"></div>
  <div class="content"></div>
  `;
  mainEl.insertAdjacentHTML("afterbegin", html);
}

createHTMLContent();
