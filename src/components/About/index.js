import React from "react";
// import Background from "../../assets/images/Background.jpg";
import ProfilePic from "../../assets/images/Profile-Pic.jpg";

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
function About() {
  return (
    <div>
      <section className="flex flex-row space-around">
        <h2 id="about" className="center">
          Hey there!
        </h2>
        <img
          src={ProfilePic}
          className="img-profile"
          // style={{ width: "20%" }}
          alt="Jason Arritt wearing a blue collared shirt"
        />
      </section>
      <section>
        <p>
          I currently live in Raleigh, North Carolina with my wife and our 3
          dogs. I started my career by joining the Army as an infantryman, and
          spent the following five years in the 82nd Airborne Division out of
          Fort Bragg. I learned skills in leadership, responsibility, and team
          building.
        </p>
        <p>
          After my time on active duty in the Army, I was accepted into Cisco's
          Veteran Talent Incubation Program, during which I earned my CCNA.
          Following the completion of the six month VTIP course, in July of
          2018, I began my employment at Cisco as a Technical Consulting
          Engineer on the SD-WAN TAC team. There I earned my CCNP Switch. I
          gained skills in trouble shooting technological problems,
          corresponding directly with customers, and working with a team.
        </p>
        <p>
          I have always had a passion for technology and have a desire to learn
          as much as I can. In July of 2022, I completed the coding bootcamp at
          the University of North Carolina at Chapel Hill at the top of my
          class.
        </p>
        <p>
          I am currently seeking employment as a full-stack web developer. I
          greatly enjoy seeking solutions to problems and sharing the knowledge
          I have gained with others. I look forward to continuing to grow my
          expertise in technology.
        </p>
      </section>
    </div>
  );
}

export default About;
