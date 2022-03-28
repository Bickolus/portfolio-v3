import React from "react";

export default function Project({ project }) {
  return (
      <div className="card m-2" style={{ width: "18.8rem" }}>
        <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
          <h5 className="flex-fill text-center p-2 text-light">
            {project.name}
          </h5>
        </div>
        <img
          className="card-img img-fluid w-100"
          src={process.env.PUBLIC_URL + project.image}
          alt="project"
        ></img>
        <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
          <a
            className="flex-fill text-center p-2 bg-yellow-green text-light"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            <h5>Repo</h5>
          </a>
          <a
            className="flex-fill text-center p-2 bg-yellow-green text-light"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <h5>Demo</h5>
          </a>
        </div>
      </div>
  );
}
