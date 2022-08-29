// import React, { useState } from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
// import Footer from "./components/Footer";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

function App() {
  // const [currentTab, setCurrentTab] = useState("About");

  // <div>
  //   <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
  //   <main>
  //     {currentTab === "About" && <About />}
  //     {currentTab === "Contact" && <Contact />}
  //     {currentTab === "Portfolio" && <Portfolio />}
  //     {currentTab === "Resume" && <Resume />}
  //   </main>
  //   <Footer></Footer>
  // </div>

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
        <Footer></Footer>
      </>
    </Router>
  );
}

export default App;
