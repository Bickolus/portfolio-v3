import React from "react";

function Contact() {
  return (
    <div>
      <h3
        className="text-green border-bottom border-2 py-2 mb-3"
        id="contact-me"
      >
        Contact Me
      </h3>

      <h5>
        My e-mail: <a href="mailto:smbraza97@gmail.com">smbraza97@gmail.com</a>
      </h5>
      <h5>
        My phone number: <a href="tel:647-627-2027">647-627-2027</a>
      </h5>
      <br></br>
      <h5>...and links to my social media accounts!</h5>

      <div className="container mw-100 px-0">
        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <a className="card" href="https://github.com/Bickolus">
              <img
                className="card-img img-fluid w-100"
                src="/images/github-thumbnail.png"
                alt="GitHub Logo"
              ></img>
              <div className="card-img-overlay d-flex align-items-center site-link">
                <p className="flex-fill text-center text-light">
                  <i className="fab fa-github icon-size"></i>
                </p>
              </div>
            </a>
          </section>

          <section className="col-sm p-0 mb-3 me-sm-2">
            <a
              className="card"
              href="https://www.linkedin.com/in/bilal-raza-73418b80"
            >
              <img
                className="card-img img-fluid w-100"
                src="/images/linkedin-thumbnail.png"
                alt="LinkedIn Logo"
              ></img>
              <div className="card-img-overlay d-flex align-items-center site-link">
                <p className="flex-fill text-center text-light">
                  <i className="fab fa-linkedin icon-size"></i>
                </p>
              </div>
            </a>
          </section>
        </div>

        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <a className="card" href="https://www.facebook.com/Bickolus">
              <img
                className="card-img img-fluid w-100"
                src="/images/facebook-thumbnail.png"
                alt="Facebook Logo"
              ></img>
              <div className="card-img-overlay d-flex align-items-center site-link">
                <p className="flex-fill text-center text-light">
                  <i className="fab fa-facebook icon-size"></i>
                </p>
              </div>
            </a>
          </section>

          <section className="col-sm p-0 mb-3 me-sm-2">
            <a className="card" href="https://twitter.com/Bicko_Blicko">
              <img
                className="card-img img-fluid w-100"
                src="/images/twitter-thumbnail.png"
                alt="Twitter Logo"
              ></img>
              <div className="card-img-overlay d-flex align-items-center site-link">
                <p className="flex-fill text-center text-light">
                  <i className="fab fa-twitter icon-size"></i>
                </p>
              </div>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
