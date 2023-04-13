import React from 'react'

function Project(props) {
  return (
    <a key={props.id} target="_blank"
            href={props.link}
            className="title-holder"
          >
            <img
              src={props.img}
              alt={props.title}
              className="large-project"
            />
            <div className="project-title">{props.title}</div>
          </a>
)}

export default Project