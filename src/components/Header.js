import React from "react";

function Header({ currentPage, handlePageChange }) {
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
                href="#about-me"
                onClick={() => handlePageChange("About")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "About"
                    ? "nav-item nav-link active border-end border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-end border-yellow-green py-0 my-auto"
                }
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project"
                    ? "nav-item nav-link active border-end border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-end border-yellow-green py-0 my-auto"
                }
              >
                My Projects
              </a>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "nav-item nav-link active border-end border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-end border-yellow-green py-0 my-auto"
                }
              >
                My Skills
              </a>
              <a
                href="#contact-me"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
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
