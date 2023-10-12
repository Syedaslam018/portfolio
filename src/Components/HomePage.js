import React from "react";
import FadeInAnimation from "./FadeInAnimation";

const HomePage = () => {
  return (
    <div>
      <FadeInAnimation>
        <h1>Welcome to My Portfolio</h1>
      </FadeInAnimation>
      <FadeInAnimation>
        <p>
          Hi, I'm Aslam, a Full Stak developer passionate about creating
          beautiful and interactive web experiences.
        </p>
      </FadeInAnimation>
      <FadeInAnimation>
        <p>
          On this website, you'll find examples of my work, skills, and projects
          I've been involved in.
        </p>
      </FadeInAnimation>
      <FadeInAnimation>
        <p>
          Feel free to explore and get in touch if you have any questions or
          opportunities to collaborate.
        </p>
      </FadeInAnimation>
    </div>
  );
};

export default HomePage;
