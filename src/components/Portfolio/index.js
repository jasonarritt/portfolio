import React from "react";

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
function Portfolio() {
  const projectArray = [
    {
      title: "Live Hire",
      image: "../../assets/images/Live-Hire.png",
      githubLink: "https://github.com/ladytrell/entertaining-pen/",
      deployedLink: "https://gentle-dawn-52689.herokuapp.com/",
    },
    {
      title: "Fan Food",
      image: "../../assets/images/Fan-Food.png",
      githubLink: "https://github.com/masontmorris/fanfood",
      deployedLink: "https://masontmorris.github.io/fanfood/",
    },
    {
      title: "Budgeted",
      image: "../../assets/images/Budgeted.png",
      githubLink: "https://github.com/jasonarritt/Budgeted",
      deployedLink: "https://jasonarritt-budgeted.herokuapp.com/",
    },
    {
      title: "Think About It",
      image: "../../assets/images/Think-About-It.png",
      githubLink: "https://github.com/jasonarritt/think-about-it",
      deployedLink: "",
    },
    {
      title: "TRACK-EMployee",
      image: "../../assets/images/TRACK-EMployee.png",
      githubLink: "https://github.com/jasonarritt/TRACK-EMployee",
      deployedLink: "",
    },
    {
      title: "README.md Doctor",
      image: "../../assets/images/README-Doctor.png",
      githubLink: "https://github.com/jasonarritt/README.md-doctor",
      deployedLink: "",
    },
  ];
  return (
    <section>
      <h1 id="portfolio" data-testid="Portfolio">
        Portfolio
      </h1>
    </section>
  );
}

export default Portfolio;
