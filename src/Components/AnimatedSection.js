import React from "react";
import { CSSTransition } from "react-transition-group";
import "./AnimatedSection.css";

function AnimatedSection({ children, ...props }) {
  return (
    <CSSTransition {...props} timeout={500} classNames="fade" unmountOnExit>
      {children}
    </CSSTransition>
  );
}

export default AnimatedSection;
