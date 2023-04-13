import React from "react";
import pdf from "../../docs/Resume.pdf";

function Resume() {
  return (
    <>
      <a href={pdf} target="_blank">
        Download my resume.
      </a>
      <div>
        <h2>Front-End Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h2>Back-End Skills</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </>
  );
}

export default Resume;
