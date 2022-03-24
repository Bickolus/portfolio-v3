import React from "react";

function Resume() {
  return (
    <div>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="resume">
        My Skills
      </h3>

      <h5>
        These are some things I'm pretty proficient at:
      </h5>

      <ul class="list-group list-group-flush m-2">
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">Node.js</li>
        <li class="list-group-item">Git</li>
        <li class="list-group-item">HTML/CSS</li>
        <li class="list-group-item">MongoDB</li>
        <li class="list-group-item">MySQL</li>
        <li class="list-group-item">Express</li>
      </ul>

      <a href="bilal-raza-resume.pdf" target="_blank" rel="noreferrer">
        <h4>Here is a link to my resume, in PDF form.</h4>
      </a>
    </div>
  );
}

export default Resume;
