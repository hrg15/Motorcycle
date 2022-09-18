import React from "react";

const About = () => {
  return (
    <div className="text-center w-fit mx-auto font-roboto">
      <h1>
        Author:{" "}
        <a
          className="font-bold hover:text-blue-600"
          href="https://github.com/hrg15"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hamidreza ghasemi
        </a>
      </h1>
      <h2>Tools used:</h2>
      <ul className="font-light ">
        <li>React</li>
        <li>Tailwin css</li>
        <li>Redux</li>
        <li>React router</li>
        <li>database interaction</li>
      </ul>
      <h2>About this app:</h2>
      <p className="font-light mb-2 w-2/5 mx-auto">
        This is a practice App to improve my skill in using React, Redux,
        tailwind css, Firebase and react router. In this App, when you add an
        item, it is transferred to the database (Firebase) through redux
        actions. One of the challenges of this program was adding photos to
        Firebase and then displaying them
      </p>
      <div className="links flex w-2/5 mx-auto justify-between">
        <a
          className="hover:text-blue-600"
          href="https://www.linkedin.com/in/hrg15"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkdin
        </a>
        <a
          className="hover:text-blue-600"
          href="https://github.com/hrg15"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="hover:text-blue-600"
          href="mailto:hamidrezaghaseme@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default About;
