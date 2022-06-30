import React from "react";
// import Background from "../../assets/images/Background.jpg";
import ProfilePic from "../../assets/images/Profile-Pic.jpg";

function About() {
  return (
    <div>
      <section className="flex flex-row m-auto">
        <h1 id="about">About Me</h1>
        <img
          src={ProfilePic}
          className="my-1"
          style={{ width: "10%" }}
          alt="Profile Pic"
        />
      </section>
      <section>
        <p>
          My name is Jason Arritt. I was previously a SD-WAN Technical
          Consulting Engineer at Cisco. I am working on becoming a Full Stack
          Developer.
        </p>
      </section>
    </div>
  );
}

export default About;
