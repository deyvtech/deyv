// import assets
import { icons, menus, introContent } from "../data";
import logo from "../icon/DT.svg";
import menu from "../icon/menu.png";
import arrow from "../images/Arrow.svg";

function getIconUrl(name) {
  return new URL(`../icon/${name}.png`, import.meta.url).href;
}

export const header = function () {
  const headerEl = document.querySelector("header");
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

  headerEl.insertAdjacentHTML("afterbegin", headerHTML);
};

export const sidebar = function () {
  const sidebarEl = document.querySelector("aside");

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

  sidebarEl.insertAdjacentHTML("afterbegin", sidebarHTML);
};

export const main = function () {
  const mainEl = document.querySelector("main");

  const mainHTML = `
  <section id="introduction">
  <h1 class="hero__title">${introContent.greeting}<br /><span class='hero__name'>${introContent.name}</span></h1>
  <p class='hero__intro'></p>
  <a href="#" class="hero__btn">${introContent.btn}</a>
  </section>
  `;
  mainEl.insertAdjacentHTML("afterbegin", mainHTML);
};


