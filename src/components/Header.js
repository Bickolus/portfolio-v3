import React from "react";

function Header() {
  return (
    <header className="navbar-expand navbar-dark bg-dark-gray py-0 px-0 px-sm-2 px-md-3 mx-0 border-bottom border-yellow-green border-2">
      <div className="container mw-100">
        <div className="row m-0">
          <div className="col-12 col-sm-6 p-0 d-flex justify-content-center justify-content-sm-start">
            <h2 className="p-3 my-auto mx-0 text-dark-gray text-center bg-yellow-green flex-fill flex-sm-grow-0 border-radius">
              Syed Bilal Raza
            </h2>
          </div>
          <div className="col-12 col-sm-6 my-auto">
            <nav className="navbar-nav d-flex justify-content justify-content-sm-end">
              <a
                className="nav-item nav-link border-end border-yellow-green py-0 my-auto"
                href="#about-me"
              >
                About Me
              </a>
              <a
                className="nav-item nav-link border-end border-yellow-green py-0 my-auto"
                href="#projects"
              >
                My Projects
              </a>
              <a
                className="nav-item nav-link border-end border-yellow-green py-0 my-auto"
                href="#resume"
              >
                My Skills
              </a>
              <a className="nav-item nav-link" href="#contact-me">
                Contact Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
