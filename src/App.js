import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
