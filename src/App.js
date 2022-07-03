import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
// import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
