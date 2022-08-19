import React from "react";
// import Background from "../../assets/images/Background.jpg";
import ProfilePic from "../../assets/images/Profile-Pic.jpg";

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
function About() {
  return (
    <div>
      <section className="flex flex-row space-around">
        <h1 id="about" className="center">
          About Me
        </h1>
        <img
          src={ProfilePic}
          className="img-profile"
          // style={{ width: "20%" }}
          alt="Jason Arritt wearing a blue collared shirt"
        />
      </section>
      <section>
        <p>
          Hey there! My name is Jason Arritt. I am originally from Southern
          California. In my early twenties I joined the Army as an infantryman,
          which brought me to North Carolina and I spent the following five
          years in the 82nd Airborne Division out of Fort Bragg. After my time
          on active duty in the Army, I was accepted into Cisco's Veteran Talent
          Incubation Program, during which I earned my CCNA. Following the
          completion of the six month VTIP course, in July of 2018 I began my
          employment at Cisco as a Technical Consulting Engineer on the SD-WAN
          TAC team, and also earned my CCNP Switch.
        </p>
        <p>
          In July of 2022 I successfully completed the coding bootcamp at the
          University of North Carolina at Chapel Hill. I have always had passion
          for technology and learning as much as I can. I am currently seeking
          employment as a full-stack web developer. I greatly enjoy seeking
          solutions to problems and sharing the knowledge I have gained with
          others.
        </p>
      </section>
    </div>
  );
}

export default About;
