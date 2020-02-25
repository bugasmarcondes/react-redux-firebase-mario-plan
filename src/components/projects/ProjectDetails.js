import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectDetails = props => {
  //console.log(props);

  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            facere illum amet a nam, optio corrupti fugit nisi soluta quod
            placeat alias voluptas quia sit quidem laboriosam. Dicta, in
            aliquid.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
