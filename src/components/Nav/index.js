import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">My Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#resume">My Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
