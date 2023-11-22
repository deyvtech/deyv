import close from "../icon/close.png";
import { introContent } from "../data";
import { TYPE_WRITER_INDEX, TYPE_WRITER_SPEED } from "./config";

export const hamburger = () => {
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
  }
  hamburger.addEventListener("click", toggleMenu);
};

export const handleTypeWriter = () => {
  let i = TYPE_WRITER_INDEX;
  let speed = TYPE_WRITER_SPEED;
  let txt = introContent.intro;
  const el = document.querySelector(".hero__intro");
  function typeWriter() {
    if (i < txt.length) {
      el.innerHTML += txt.at(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
};
