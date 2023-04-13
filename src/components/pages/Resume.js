import React from "react";

function Resume() {
  return (
    <>
      <p>
        Please find my{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/mia-mauro-439a2626b/"
            target="_blank"
          >
            resume
          </a>
        </span>{" "}
        on LinkedIn.
      </p>
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
