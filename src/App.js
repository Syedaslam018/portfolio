import React, { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import AnimatedSection from "./Components/AnimatedSection";
import Projects from "./Components/Projects";
import Typewriter from "./Components/TypeWriter";
import HomePage from "./Components/HomePage";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header>
        <h1> Syed Aslam </h1>
      </header>
      <main>
        <nav>
          <ul>
            <li
              className={activeSection === "home" ? "active" : ""}
              onClick={() => handleSectionChange("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleSectionChange("about")}
            >
              About
            </li>
            <li
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => handleSectionChange("projects")}
            >
              Projects
            </li>
            <li
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => handleSectionChange("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
        <div id="homepageImg">
          <img
            src="https://st2.depositphotos.com/28956650/44588/v/450/depositphotos_445889338-stock-illustration-programmer-software-developer-icon-vector.jpg"
            alt="coding"
          ></img>
        </div>
        <AnimatedSection
          in={activeSection === "home"}
          classNames="fade"
          timeout={500}
        >
          <section>
            <h2>Home</h2>
            <HomePage />
          </section>
        </AnimatedSection>
        <AnimatedSection
          in={activeSection === "about"}
          classNames="fade"
          timeout={500}
        >
          <section>
            <h2>About Me</h2>
            <Typewriter
              text="Highly skilled Backend Developer with expertise in JavaScript, Node.js, Express, MySQL, TypeScript, MongoDB. Strong problem-solving abilities and a passion for creating
efficient and scalable web applications.
"
              delay={50}
            />
            <div id="skills">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png"
                alt="js"
              ></img>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                alt="nodejs"
              ></img>
              <img
                src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                alt="MySQL"
              ></img>
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                alt="typescript"
              ></img>
              <img
                src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                alt="express js"
              ></img>

              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
              ></img>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-226029.png"
                alt="mongoDB"
              ></img>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection
          in={activeSection === "projects"}
          classNames="fade"
          timeout={500}
        >
          <section>
            <Projects />
          </section>
        </AnimatedSection>
        <AnimatedSection
          in={activeSection === "contact"}
          classNames="fade"
          timeout={500}
        >
          <section>
            <h2>Contact Me</h2>
            <Contact />
          </section>
        </AnimatedSection>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
