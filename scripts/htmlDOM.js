// import assets
import { socialIcons, menus, introContent, skillsIcon } from "../data";
import logo from "../icon/DT.svg";
import menu from "../icon/menu.png";
import arrow from "../images/Arrow.svg";
import arrowContact from "../icon/contact-me-arrow.png";

function getIconUrl(name) {
  return new URL(`../icon/${name}.png`, import.meta.url).href;
}

export const header = function () {
  const headerEl = document.querySelector("header");
  const headerHTML = `
    <div class='header__container'>
    <ul class='icons__container'>
      ${socialIcons
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
  <div class="section-container">
    <span class="section-tag">About</span class="section-tag">
    <h1 class="hero__title">${
      introContent.greeting
    }<br /><span class='hero__name'>${introContent.name}</span></h1>
    <p class='hero__intro'></p>
    <a href="#" class="hero__btn">${
      introContent.btn
    } <img src="${arrowContact}" alt="" /></a>
  </div>
  </section>
  <section id="skills">
  <div class="section-container">
      <span class="section-tag">Skills</span class="section-tag">
      <div>
      <ul class="skills__icon-container">
      ${skillsIcon
        .map(
          (icon) =>
            `
        <li class="skills__icon-row icon-${icon.label}">
            <img src=${getIconUrl(icon.url)} alt=""  class="${icon.label}"/>
        </li>
        `
        )
        .join("")}
      
      </ul>
      </div>
      
  </div>
  </section>
  `;
  mainEl.insertAdjacentHTML("afterbegin", mainHTML);
};

console.log(skillsIcon);