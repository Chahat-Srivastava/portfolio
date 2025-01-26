import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: "#334155",
        borderRadius: "12px",
        padding: "20px",
        color: "#e2e8f0",
        transition: "transform 0.3s ease",
      }}
    >
      <h2 className="title is-4" style={{ color: "#60a5fa" }}>
        {project.title}
      </h2>
      <p style={{ color: "#94a3b8" }}>{project.description}</p>
      <p>
        <strong style={{ color: "#fbbf24" }}>Tech Stack:</strong>{" "}
        {project.tech.join(", ")}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        style={{
          backgroundColor: "#3b82f6",
          color: "#f8fafc",
          marginTop: "15px",
          border: "none",
          padding: "8px 15px",
          borderRadius: "8px",
        }}
      >
        View Project
      </a>
    </motion.div>
  );
}

export default ProjectCard;
