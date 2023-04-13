import React from "react";
import Project from "../Project";
import travelBuddy from "../../images/travbuddy.png";
import discoveringDenver from "../../images/discdenv.png";

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
];

function Portfolio() {
  return (
    <div className="row">
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
