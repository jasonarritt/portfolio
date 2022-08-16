import React from "react";

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
function Resume() {
  return (
    <div>
      <section>
        <h1 id="resume" className="center">
          Resume
        </h1>
      </section>
      <div id="skills" className="flex flex-row space-around">
        <section>
          <h3>Front End Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
        <section>
          <h3>Back End Skills</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </section>
      </div>
      <section>
        <p className="center">
          <a
            href="https://docs.google.com/document/d/1sYYluQ0S-vzDAA_rU0BRdx4_DXUT4rWS/edit?usp=sharing&ouid=102039981224698088055&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </p>
      </section>
    </div>
  );
}

export default Resume;
