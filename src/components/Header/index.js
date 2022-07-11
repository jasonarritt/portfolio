import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    // WHEN I view the header
    // THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
    <header className="flex flex-row space-around">
      <h1>Jason Arritt</h1>
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
    </header>
  );
}

export default Header;
