import React from "react";

function Project() {
  return (
    <div>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="projects">
        Some of My Projects
      </h3>

      <div className="container mw-100 px-0">
      <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 text-light">
                  Pick &amp; Mix
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/picknmix-thumbnail.png"}
                alt="Pick &amp; Mix"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/MpAlfano/Grocery-Store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://pick-n-mix.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Social Network API Code
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/snac-thumbnail.png"}
                alt="SNAC"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/Bickolus/snac"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://www.youtube.com/watch?v=qkkJSwJtiyE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Video</h5>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 text-light">
                  Billboard
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/billboard-thumbnail.png"}
                alt="Billboard"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nevan-dsouza/billboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://nevan-dsouza.github.io/billboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  The Employee-Tracking App
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/teta-thumbnail.png"}
                alt="TETA"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/Bickolus/teta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://user-images.githubusercontent.com/96181899/155039447-a97dbedd-e3a4-46d2-b1d9-960d79f6fda0.mp4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Video</h5>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Blog for Tech Stuff
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/bfts-thumbnail.png"}
                alt="Blog For Tech Stuff"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/Bickolus/bfts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://blog-for-tech-stuff.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Weather Dashboard
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/weather-thumbnail.png"}
                alt="Weather Dashboard"
              ></img>
              <div className="card-img card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/Bickolus/weather-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://bickolus.github.io/weather-dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed</h5>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Project;
