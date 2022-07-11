import React from "react";
import Project from "../Project";
import LiveHire from "../../assets/images/Live-Hire.png";
import FanFood from "../../assets/images/Fan-Food.png";
import Budgeted from "../../assets/images/Budgeted.png";
import ThinkAboutIt from "../../assets/images/Think-About-It.png";
import TRACKEMployee from "../../assets/images/TRACK-EMployee.png";
import READMEDoctor from "../../assets/images/README-Doctor.png";

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
function Portfolio() {
  const projectArray = [
    {
      title: "Live Hire",
      image: LiveHire,
      imageAlt: "Live Hire home page",
      githubLink: "https://github.com/ladytrell/entertaining-pen/",
      deployedLink: "https://gentle-dawn-52689.herokuapp.com/",
    },
    {
      title: "Fan Food",
      image: FanFood,
      imageAlt: "Fan Food home page",
      githubLink: "https://github.com/masontmorris/fanfood",
      deployedLink: "https://masontmorris.github.io/fanfood/",
    },
    {
      title: "Budgeted",
      image: Budgeted,
      imageAlt: "Budgeted home page",
      githubLink: "https://github.com/jasonarritt/Budgeted",
      deployedLink: "https://jasonarritt-budgeted.herokuapp.com/",
    },
    {
      title: "README.md Doctor",
      image: READMEDoctor,
      imageAlt: "README.md Doctor GitHub repository README",
      githubLink: "https://github.com/jasonarritt/README.md-doctor",
      deployedLink: "",
    },

    {
      title: "TRACK-EMployee",
      image: TRACKEMployee,
      imageAlt: "TRACK-EMployee menu",
      githubLink: "https://github.com/jasonarritt/TRACK-EMployee",
      deployedLink: "",
    },
    {
      title: "Think About It",
      image: ThinkAboutIt,
      imageAlt: "Think About Insomnia routes",
      githubLink: "https://github.com/jasonarritt/think-about-it",
      deployedLink: "",
    },
  ];
  return (
    <section>
      <h1 id="portfolio" className="center" data-testid="Portfolio">
        Portfolio
      </h1>
      <div className="projects flex flex-row space-around">
        {projectArray.map((project) => (
          <div className="card">
            <Project key={project.title} project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
