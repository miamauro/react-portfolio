import React from "react";
import headshot from "../../../images/headshot.jpeg";
import "./About.css";

function About() {
  return (
    <div>
      <img src={headshot} alt="headshot"></img>
      <h2>
        Hello! My name is Mia Mauro, and I'm currently studying web development
        in the University of Denver's Full-Stack Coding program. I live in Des
        Moines, Iowa, but was previously traveling the country full time as a
        registered nurse. <br /> <br />
        After four years in the healthcare industry, my love for learning lead
        me back to the classroom. I am thrilled to utilize my critical thinking
        skills - along with a diverse range of talents - in a whole new light! I
        look forward to connecting with you.
      </h2>k
    </div>
  );
}

export default About;
