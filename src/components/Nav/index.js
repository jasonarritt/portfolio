import React from "react";

function Nav() {
  return (
    // WHEN I view the header
    // THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
    <header className="flex flex-row justify-content-between">
      <h1>Jason Arritt</h1>

      {/* WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted */}
      {/* WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted */}
      <nav>
        <ul className="flex-row align-right">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#contact-form">Contact</a>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
