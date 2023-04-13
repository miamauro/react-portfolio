import React from "react";

// function Project(props) {
//   return (
//     <a key={props.id} target="_blank"
//             href={props.link}
//             className="title-holder"
//           >
//             <img
//               src={props.img}
//               alt={props.title}
//               className="large-project"
//             />
//             <div className="project-title">{props.title}</div>
//           </a>
// )}

// export default Project

function Project(props) {
  return (
    <a href={props.link} target="_blank">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={props.img} class="card-img-top" alt={props.title} />
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;
