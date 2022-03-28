import React from "react";
import Project from "./Project";
import projects from "../projects.json";

function Portfolio() {
  const renderProjects = () => {
    return projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  };

  return (
    <div>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="projects">
        Some of My Projects
      </h3>
      <div className="d-flex flex-wrap justify-content-center container mw-100 mb-2 px-0">
        {renderProjects()}
      </div>
    </div>
  );
}

export default Portfolio;
