import React from "react";

function Projects() {
  const projects = [
    {
      title: "NeuroNirvana",
      description: "A gamified platform to assess children's mental health.",
      tech: ["ReactJS", "OpenAI"],
      link: "https://github.com/yourusername/neuronirvana",
    },
    {
      title: "SmartCart",
      description: "A futuristic retail shopping experience.",
      tech: ["ReactJS", "ML"],
      link: "https://github.com/yourusername/smartcart",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">My Projects</h1>
        <div className="columns is-multiline">
          {projects.map((project, index) => (
            <div className="column is-half" key={index}>
              <div className="box">
                <h2 className="title is-4">{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-link mt-3"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
