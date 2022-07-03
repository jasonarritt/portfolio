import React from "react";
// import Background from "../../assets/images/Background.jpg";
import ProfilePic from "../../assets/images/Profile-Pic.jpg";

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
function About() {
  return (
    <div>
      <section className="flex flex-row m-auto">
        <h1 id="about">About Me</h1>
        <img
          src={ProfilePic}
          className="my-1 rounded"
          style={{ width: "10%" }}
          alt="Jason Arritt wearing a blue collared shirt"
        />
      </section>
      <section>
        <p>
          My name is Jason Arritt. I am originally from Southern California. In
          my early twenties I joined the Army as an infantryman, which brought
          me to North Carolina and I spent the following five years in the 82nd
          Airborne Division. After my time on active duty in the Army, I was
          accepted into Cisco's Veteran Talent Incubation Program, during which
          I earned my CCNA. Following the completion of the six month VTIP
          course in July of 2018 I began my employment at Cisco as a Technical
          Consulting Engineer on the SD-WAN TAC team. In February of 2022 I
          began the coding bootcamp at the University of North Carolina at
          Chapel Hill. I am currently working on completing the bootcamp and
          becoming a full-stack web developer.
        </p>
      </section>
    </div>
  );
}

export default About;
