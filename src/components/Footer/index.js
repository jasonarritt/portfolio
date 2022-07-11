import React from "react";

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
function Footer() {
  return (
    <footer>
      <section className="flex flex-row space-around">
        <a href="https://github.com/jasonarritt">GitHub</a>
        <a href="https://www.linkedin.com/in/jasonarritt/">LinkedIn</a>
        <a href="https://stackoverflow.com/users/18031660/jasonarritt">
          Stack Overflow
        </a>
      </section>
      {/* <p>&copy; 2022 Jason Arritt</p> */}
    </footer>
  );
}

export default Footer;
