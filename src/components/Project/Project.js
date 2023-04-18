import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="card" style={{ width: 425, margin: 15 }}>
      <img src={props.img} class="card-img-top h-100" alt={props.title} />
      <div className="card-body app-title">
        <h2 className="card-title">{props.title}</h2>
        <p class="card-text">{props.text}</p>
      </div>
      <div className="card-body app-links">
        <a href={props.link} target="_blank" className="btn btn-primary" id="app-link">
          Application
        </a>
        <a href={props.repo} target="_blank" className="btn btn-primary" id="app-link">
          Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
