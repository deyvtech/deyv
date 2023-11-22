// import CSS
import "./styles/global.css";
import "./styles/main.css";

// import modules
import loader from "./scripts/loader";
import { sidebar, header, main } from "./scripts/htmlDOM";
import { hamburger, handleTypeWriter } from "./scripts/animation";

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

  // Header html
  header();
  // Aside html
  sidebar();
  // Main html
  main();
}

createHTMLContent();
hamburger();
handleTypeWriter();
