import React from "react";
import '../styles/Education.css';
import { motion } from "framer-motion";

function Education() {
  // Educational Data
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dr. APJ Abdul Kalam Technical University",
      duration: "2021 - 2025",
      description:
        "Coursework : Data Structure , DBMS , Operating System , Software Engineering , Data Analytics , Machine Learning.",
    },
    {
      degree: "Higher Secondary School",
      institution: "B.B.S. International School",
      duration: "2019 - 2021",
      description:
        "Excelled in Mathematics and Computer Science, laying the foundation for a career in technology.",
    },
    {
      degree: "High School",
      institution: "B.B.S. International School",
      duration: "2017 - 2019",
      description: "Focused on core subjects and developed an interest in programming.",
    },
  ];

  return (
    <section id="education" className="section dark-background">
      <div className="container">
        <h1 className="title has-text-centered has-text-light">Education</h1>
        <motion.div
          className="timeline"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item box dark-background-light"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="title is-4 has-text-light">{edu.degree}</h2>
              <h3 className="subtitle is-5 has-text-primary">
                {edu.institution}
              </h3>
              <p className="is-size-6 has-text-grey-light">{edu.duration}</p>
              <p className="mt-3 has-text-light">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
