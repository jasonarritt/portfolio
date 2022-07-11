import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
  const tabs = ["About", "Contact", "Resume", "Portfolio"];
  return (
    <div>
      {/* WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted */}
      {/* WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted */}
      <nav>
        <ul className="nav nav-tabs flex flex-row justify-content-between">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                href={`#${tab.toLowerCase()}`}
                onClick={() => setCurrentTab(tab)}
                className={`mx-1 ${
                  currentTab === tab ? "nav-link navActive" : "nav-link"
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
