import React from "react";
import headshot from "../../../images/headshot.jpeg";
import "./About.css";

function About() {
  return (
    <div>
      <img src={headshot} alt="headshot" id="headshot"></img>
      <h2 id="about">
        Hello! My name is Mia Mauro, and I've recently completed the University
        of Denver's Full-Stack Web Development program. I live in Des Moines,
        Iowa, but was previously traveling the country full-time as a registered
        nurse. <br /> <br />
        After four years in the healthcare industry, my love for learning lead
        me back to the classroom. I am thrilled to utilize my critical thinking
        skills - along with a diverse range of talents - in a whole new light! I
        look forward to connecting with you.
      </h2>
    </div>
  );
}

export default About;
