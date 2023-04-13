import React from "react";
import headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <div>
      <img src={headshot} alt="headshot" height="300px"></img>
      <h1>
        Hello! My name is Mia Mauro, and I'm currently studying web development
        in the University of Denver's Full-Stack Coding program. I live in Des
        Moines, Iowa, but was previously traveling the country full time as a
        registered nurse.
      </h1>
    </div>
  );
}

export default About;
