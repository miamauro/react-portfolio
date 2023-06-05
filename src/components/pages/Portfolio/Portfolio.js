import React from "react";
import Project from "../../Project/Project";
import travelBuddy from "../../../images/travbuddy.png";
import discoveringDenver from "../../../images/discdenv.png";
import mash from "../../../images/mash.png";
import regexTut from "../../../images/regextut.png";
import socialNetApi from "../../../images/socialnetapi.png";
import pwGen from "../../../images/pwgen.png";
import codeQuiz from "../../../images/codequiz.png";
import readmeGen from "../../../images/readmegen.png";
import empTracker from "../../../images/emptracker.png";
import noteTaker from "../../../images/noteTaker.png";

const projects = [
  {
    title: "Discovering Denver",
    link: "https://whispering-dawn-72162.herokuapp.com/",
    repo: "https://github.com/miamauro/discovering-denver",
    img: discoveringDenver,
    text: "a full-stack application allowing users to learn more about Denver hot spots",
  },
  {
    title: "MASH",
    link: "https://miamauro.github.io/MASH/",
    repo: "https://github.com/miamauro/MASH",
    img: mash,
    text: "a simple but fun future-predicting game that you probably played as a kid!",
  },
  {
    title: "Regex Tutorial",
    link: "https://gist.github.com/miamauro/b1f26102b757cc305c9faa6a9dd4f36f",
    repo: "https://github.com/miamauro/regex-tutorial",
    img: regexTut,
    text: "a GitHub Gist providing a thorough explanation of a regular expression",
  },
  {
    title: "Social Network API",
    link: "https://drive.google.com/file/d/1uvdGuYut-pIYrWE2jm15e9577JuMg7u5/view",
    repo: "https://github.com/miamauro/social-network-api",
    img: socialNetApi,
    text: "an API for a social network that uses a NoSQL database in order to handle large amounts of unstructured data",
  },
  {
    title: "Travel Buddy",
    link: "https://hollyhleal.github.io/travel-buddy/",
    repo: "https://github.com/miamauro/travel-buddy",
    img: travelBuddy,
    text: "a front-end application designed to be your personal planner on your next trip",
  },
  {
    title: "README Generator",
    link: "https://drive.google.com/file/d/12lpKX8HtEze881aE29nM0ctqSKeneDiV/view",
    repo: "https://github.com/miamauro/readme-generator",
    img: readmeGen,
    text: "a command-line tool that efficiently generates a professional README from user input",
  },
  {
    title: "Employee Tracker",
    link: "https://drive.google.com/file/d/138Ke3bRTIcpJNAYqPoSgST07RYA_6z9O/view",
    repo: "https://github.com/miamauro/employee-tracker",
    img: empTracker,
    text: "a command-line application used to manage a company's employee database using Node.js, Inquirer, and MySQL",
  },
  {
    title: "Password Generator",
    link: "https://miamauro.github.io/password-generator/",
    repo: "https://github.com/miamauro/password-generator",
    img: pwGen,
    text: "an application that allows the user to generate a random password that meets certain criteria of their choosing, providing a larger measure of security",
  },
  {
    title: "Code Quiz",
    link: "https://miamauro.github.io/code-quiz/",
    repo: "https://github.com/miamauro/code-quiz",
    img: codeQuiz,
    text: "an application that allows the user to navigate through a timed coding quiz of multiple choice questions",
  },
  {
    title: "Note Taker",
    link: "https://shielded-reaches-96224.herokuapp.com/",
    repo: "https://github.com/miamauro/note-taker",
    img: noteTaker,
    text: "an application that allows the user to write and save notes",
  },
];

function Portfolio() {
  return (
    <div className="row justify-content-around">
      {projects.map((obj, i) => (
        <Project
          id={i}
          link={obj.link}
          img={obj.img}
          title={obj.title}
          repo={obj.repo}
          text={obj.text}
        />
      ))}
    </div>
  );
}

export default Portfolio;
