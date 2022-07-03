import React from "react";

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
function Resume() {
  return (
    <div>
      <section>
        <h1 id="resume">Resume</h1>
      </section>
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
      <section>
        <p>
          <a
            href="https://docs.google.com/document/d/1ckr3ayiPUS_9V6JDaVzqbfsxm0zJMvn4/edit?usp=sharing&ouid=102039981224698088055&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
          (Needs to be updated)
        </p>
      </section>
    </div>
  );
}

export default Resume;
