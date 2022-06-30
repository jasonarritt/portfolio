import React from "react";
import Background from "../../assets/images/Background.jpg";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img
        src={Background}
        className="my-2"
        style={{ width: "100%" }}
        alt="Background"
      />
    </section>
  );
}

export default About;
