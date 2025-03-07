import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Medical Healthcare Analysis System",
      description:
        "The Medical Healthcare Analysis System is an innovative platform designed to enhance healthcare delivery through technology. It offers capabilities like disease detection, health monitoring, and personalized recommendations, leveraging machine learning models to analyze patient data and predict conditions such as diabetes, Parkinson’s, and other chronic illnesses.",
      tech: ["ReactJS", "Tensorflow", "MongoDB", "Keras", "Python"],
      link: "https://github.com/Chahat-Srivastava/health-care",
    },
    {
      title: "NeuroNirvana",
      description:
        "Our web application aims to gamify the assessment of children's mental health, offering interactive solutions and personalized pathways based on their needs. It features AI-driven daily life questions, and a supportive community, promoting mental health awareness and well-being.",
      tech: ["ReactJS", "Gemini API", "MongoDB"],
      link: "https://github.com/Anshika124/NeuroNirvana",
    },
    {
      title: "Sunshine Companion",
      description:
        "Sunshine Companion is a sleek and user-friendly web application designed to provide accurate and timely weather updates. It not only tells you the current weather conditions of your location but also offers a detailed 5-day weather forecast, helping you plan your days ahead. The app integrates seamlessly with a weather API to deliver real-time data.",
      tech: ["HTML", "CSS", "Javascript", "Weather API"],
      link: "https://github.com/Chahat-Srivastava/Sunshine-Companion",
    },
    {
      title: "Thyroid Detection Model",
      description:
        "This project involves developing a machine learning model to detect thyroid disease. The model utilizes various classifiers to predict whether a person has thyroid issues based on provided medical data. The model successfully identifies the presence or absence of thyroid disease, providing a quick and efficient diagnostic tool using machine learning techniques.",
      tech: ["Machine Learning Classifier", "Tensorflow", "Python"],
      link: "https://github.com/Chahat-Srivastava/thyroid-model",
    },
    {
      title: "Potato Leaf Disease Classifier",
      description:
        "Built and trained a CNN model to classify potato leaf disease into three categories: Early Blight, Healthy, and Late Blight. Implemented TensorFlow’s ModelCheckpoint callback to save the best model weights based on validation accuracy.",
      tech: ["Keras", "Tensorflow", "Python"],
      link: "https://github.com/Chahat-Srivastava/potato-leaf-disease",
    },
    {
      title: "EREN- Desktop Assistant",
      description:
        "Desktop Assistant is a virtual assistant built using Python and Tkinter, designed to assist users with various tasks like answering queries, performing basic automation.",
      tech: ["Python", "Tkinter"],
      link: "https://github.com/Chahat-Srivastava/desktop-assistant",
    },
    {
      title: "Google Sheets Clone",
      description:
        "Google Sheets Clone is a web-based spreadsheet application built using React, enabling users to create, edit, and manage tabular data efficiently with real-time updates and formula support.",
      tech: ["React", "Bulma-CSS"],
      link: "https://github.com/Chahat-Srivastava/google-sheets-clone",
    },
    {
      title: "Hospital Analytics Dashboard",
      description:
        "Hospital Analytics Dashboard is an interactive Power BI dashboard designed to provide real-time insights into hospital operations, patient demographics, and healthcare performance. It helps analyze key metrics such as patient admissions, disease trends, and resource utilization for data-driven decision-making.",
      tech: ["Power BI","DAX"],
      link: "https://github.com/Chahat-Srivastava/data-analytics-projects",
    },
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: "#1e293b" }}>
      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "#e2e8f0" }}>
          My Projects
        </h1>
        <motion.div
          className="columns is-multiline"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.5 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="column is-half"
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
