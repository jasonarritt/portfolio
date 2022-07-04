import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    // WHEN I view the header
    // THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
    <header className="flex flex-row justify-content-between">
      <h1>Jason Arritt</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
