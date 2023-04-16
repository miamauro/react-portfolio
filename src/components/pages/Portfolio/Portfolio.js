import React from "react";
import Project from "../../Project/Project";
import travelBuddy from "../../../images/travbuddy.png";
import discoveringDenver from "../../../images/discdenv.png";
import regexTut from "../../../images/regextut.png";
import socialNetApi from "../../../images/socialnetapi.png";
import pwGen from "../../../images/pwgen.png";
import codeQuiz from "../../../images/codequiz.png";

const projects = [
  {
    title: "Travel Buddy",
    link: "https://hollyhleal.github.io/travel-buddy/",
    repo: "https://github.com/miamauro/travel-buddy",
    img: travelBuddy,
  },
  {
    title: "Discovering Denver",
    link: "https://whispering-dawn-72162.herokuapp.com/",
    repo: "https://github.com/miamauro/discovering-denver",
    img: discoveringDenver,
  },
  {
    title: "Regex Tutorial",
    link: "https://gist.github.com/miamauro/b1f26102b757cc305c9faa6a9dd4f36f",
    repo: "https://github.com/miamauro/regex-tutorial",
    img: regexTut,
  },
  {
    title: "Social Network API",
    link: "https://drive.google.com/file/d/1uvdGuYut-pIYrWE2jm15e9577JuMg7u5/view",
    repo: "https://github.com/miamauro/social-network-api",
    img: socialNetApi,
  },
  {
    title: "Password Generator",
    link: "https://miamauro.github.io/password-generator/",
    repo: "https://github.com/miamauro/password-generator",
    img: pwGen,
  },
  {
    title: "Code Quiz",
    link: "https://miamauro.github.io/code-quiz/",
    repo: "https://github.com/miamauro/code-quiz",
    img: codeQuiz,
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
        />
      ))}
    </div>
  );
}

export default Portfolio;
