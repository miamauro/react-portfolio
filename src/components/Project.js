import React from "react";

function Project(props) {
  return (
    <div className="card col-4">
      <img src={props.img} class="card-img-top" alt={props.title} />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
      </div>
      <div className="card-body">
        <a href={props.link} target="_blank" className="card-link">
          Application
        </a>
        <a href={props.repo} target="_blank" className="card-link">
          Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
