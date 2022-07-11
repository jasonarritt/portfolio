import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

function App() {
  const [currentTab, setCurrentTab] = useState("About");

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>
        {currentTab === "About" && <About />}
        {currentTab === "Contact" && <ContactForm />}
        {currentTab === "Portfolio" && <Portfolio />}
        {currentTab === "Resume" && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
