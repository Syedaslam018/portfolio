import React from "react";
import "./Contact.css";
import "font-awesome/css/font-awesome.min.css";

function About() {
  return (
    <ul>
      <li>
        <a className="facebook" href="https://github.com/Syedaslam018">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          className="twitter"
          href="https://www.linkedin.com/in/syed-aslam-9b30471b7/"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a className="instagram" href="https://www.instagram.com/syedaslam553/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a className="google" href="mailto:syedaslam.me@gmail.com">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
}

export default About;
