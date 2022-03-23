import React from "react";

function About() {
  return (
    <div>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="about-me">
        About Me
      </h3>
      <img
        className="float-sm-start rounded mt-2 mt-sm-1 me-sm-3 pb-2"
        id="profile-pic"
        src={process.env.PUBLIC_URL + "/images/bilal-raza-headshot.png"}
        alt="A Headshot of Me, Bilal Raza"
      ></img>
      <p>
        My name is Bilal Raza and I am training to become a professional
        full-stack developer. I studied at the University of Waterloo and got
        myself a Bachelors of Science degree with a minor in Health Informatics.
        During my time in post-secondary education, I learned the basics of
        Python, Racket, SQL, SAS, and MIPS architecture. I have recently earned
        my certification in full stack development from the University of
        Toronto, having developed skills in JavaScript, CSS, Node.js, MySQL,
        MongoDB, Express.js and React.js.
      </p>
      <p>
        I'm known for being passionate in finding the right solution to a
        challenging problem and being easy to collaborate with. I have extremely
        high standards for good coding practices, and always aim to make my code
        and user-interface easily readable and intuitive. I worked with a team
        of four that developed an application that looks at a country’s most
        popular songs and displays their titles, lyrics, and a link to the
        song’s YouTube video. I am more than happy to utilize my newly-developed
        skills for future projects and be part of a team who is just as eager as
        I am to create quality applications.
      </p>
    </div>
  );
}

export default About;
