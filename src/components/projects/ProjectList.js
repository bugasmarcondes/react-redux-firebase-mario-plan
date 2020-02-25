import React from "react";
import { ProjectSummary } from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(p => {
          return <ProjectSummary project={p} key={p.id} />;
        })}
    </div>
  );
};

export default ProjectList;
