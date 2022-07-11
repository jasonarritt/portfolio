import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { tabs = [], setCurrentTab, currentTab } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <div>
      {/* WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted */}
      {/* WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted */}
      <nav>
        <ul className="flex-row align-right">
          {tabs.map((tab) => (
            <li
              className={`mx-1 ${currentTab.name === tab.name && "navActive"}`}
              key={tab.name}
            >
              <span
                onClick={() => {
                  setCurrentTab(tab);
                }}
              >
                {capitalizeFirstLetter(tab.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
