import React from "react";

function Resume() {
  return (
    <div>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="resume">
        My Skills
      </h3>

      <h5>These are some things I'm proficient in:</h5>

      <ul className="list-group list-group-flush m-2">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">Git</li>
        <li className="list-group-item">HTML/CSS</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">MySQL</li>
        <li className="list-group-item">Express</li>
      </ul>

      <a href="bilal-raza-resume.pdf" target="_blank" rel="noreferrer">
        <h4>Here is a link to my resume, in PDF form.</h4>
      </a>
    </div>
  );
}

export default Resume;
