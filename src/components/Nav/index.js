import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
  const tabs = ["About", "Contact", "Resume", "Portfolio"];
  return (
    <div>
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
