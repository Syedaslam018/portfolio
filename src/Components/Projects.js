import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Group Chat App",
      description: "Description of Project 1",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/6387/6387947.png",
      projectUrl: "https://example.com/project1",
    },
    {
      title: "Expense Tracker",
      description: "Description of Project 2",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2694/2694089.png",
      projectUrl: "https://example.com/project2",
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
