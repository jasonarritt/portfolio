import React from "react";
import Project from "../Project";
import ChasingDreams from "../../assets/images/Chasing-Dreams.png";
import LiveHire from "../../assets/images/Live-Hire.png";
import FanFood from "../../assets/images/Fan-Food.png";
import Budgeted from "../../assets/images/Budgeted.png";
import ThinkAboutIt from "../../assets/images/Think-About-It.png";
import TRACKEMployee from "../../assets/images/TRACK-EMployee.png";
// import READMEDoctor from "../../assets/images/README-Doctor.png";

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
function Portfolio() {
  const projectArray = [
    {
      title: "Chasing Dreams",
      tools:
        "React.js, Node.js, Express.js, MongoDB, Mongoose, Graphql, bcrypt, JWT, Apollo, Bootstrap, Heroku, Opentripmap API, wikimedia API",
      image: ChasingDreams,
      imageAlt: "Chasing Dreams home page",
      githubLink: "https://github.com/Mikekuney/Chasing-Dreams",
      deployedLink: "https://chasing-dreams.herokuapp.com/",
    },
    {
      title: "Live Hire",
      tools:
        "Node.js, Express.js, Handlebars.js, RESTful API, MySQL, Sequelize ORM, Bootstrap, Heroku, MVC",
      image: LiveHire,
      imageAlt: "Live Hire home page",
      githubLink: "https://github.com/ladytrell/entertaining-pen/",
      deployedLink: "https://gentle-dawn-52689.herokuapp.com/",
    },
    {
      title: "Fan Food",
      tools:
        "HTML5, CSS3, JavaScript, JQuery, Day.js, Bulma CSS, TicketMaster Discover API, Foursquare Places API",
      image: FanFood,
      imageAlt: "Fan Food home page",
      githubLink: "https://github.com/masontmorris/fanfood",
      deployedLink: "https://masontmorris.github.io/fanfood/",
    },
    {
      title: "Budgeted",
      tools: "HTML5, CSS3, JavaScript, Node.js, Express.js, IndexedDB, PWA",
      image: Budgeted,
      imageAlt: "Budgeted home page",
      githubLink: "https://github.com/jasonarritt/Budgeted",
      deployedLink: "https://jasonarritt-budgeted.herokuapp.com/",
    },
    // {
    //   title: "README.md Doctor",
    //   tools: "Node.js, Express.js, Inquirer, Markdown",
    //   image: READMEDoctor,
    //   imageAlt: "README.md Doctor GitHub repository README",
    //   githubLink: "https://github.com/jasonarritt/README.md-doctor",
    //   deployedLink: "",
    // },

    {
      title: "TRACK-EMployee",
      tools: "Node.js, Express.js, MySQL, Inquirer",
      image: TRACKEMployee,
      imageAlt: "TRACK-EMployee menu",
      githubLink: "https://github.com/jasonarritt/TRACK-EMployee",
      deployedLink: "",
    },
    {
      title: "Think About It",
      tools: "Node.js, Express.js, RESTful API, MongoDB, Mongoose",
      image: ThinkAboutIt,
      imageAlt: "Think About Insomnia routes",
      githubLink: "https://github.com/jasonarritt/think-about-it",
      deployedLink: "",
    },
  ];
  return (
    <section>
      <h2 id="portfolio" className="center" data-testid="Portfolio">
        My Projects
      </h2>
      <div className="flex flex-row space-around">
        {projectArray.map((project) => (
          <div className="m-2">
            <Project key={project.title} project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
