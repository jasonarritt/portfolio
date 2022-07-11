import React, { useState } from "react";
import Nav from "../Nav";

function Header() {
  const [tabs] = useState([
    { name: "About" },
    { name: "Contact" },
    { name: "Resume" },
    { name: "Portfolio" },
  ]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    // WHEN I view the header
    // THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
    <header className="flex flex-row justify-content-between">
      <h1>Jason Arritt</h1>
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
    </header>
  );
}

export default Header;
