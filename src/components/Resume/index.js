import React from "react";

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
function Resume() {
  return (
    <div>
      <section>
        <h2 id="resume" className="center">
          My Skills
        </h2>
      </section>
      <div id="skills" className="flex flex-row space-around">
        <section>
          <h3>Front End</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Handlebars.js</li>
          </ul>
        </section>
        <section>
          <h3>Back End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>GraphQL</li>
          </ul>
        </section>
        <section>
          <h3>Languages / Other</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>JavaScript ES6+</li>
            <li>JQuery</li>
            <li>RESTful APIs</li>
            <li>Jest</li>
            <li>Heroku</li>
            <li>Atlas</li>
            <li>Linux</li>
            <li>Python</li>
            {/* <li>"Bowstaff"</li> */}
          </ul>
        </section>
      </div>
      <section className="center">
        <button type="button">
          <h4 className="">
            <a
              href="https://docs.google.com/document/d/1sYYluQ0S-vzDAA_rU0BRdx4_DXUT4rWS/edit?usp=sharing&ouid=102039981224698088055&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              View Full Resume
            </a>
          </h4>
        </button>
      </section>
    </div>
  );
}

export default Resume;
