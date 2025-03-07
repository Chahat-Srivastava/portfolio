import React from "react";
import '../styles/Training.css';
import { motion } from "framer-motion";

function Training() {
  const trainingPrograms = [
    {
      title: "AI and Robotics Summer Training",
      description:
        "45-day training conducted by CIR, IIIT Allahabad, covering Machine Learning, Deep Learning, and Robotics.",
      duration: "June 2024 - August 2024",
      instructor: "Prof. Dr. Surya Prakash",
    },
    {
      title: "Data Analytics",
      description:
        "100 hours training conducted as a part of Honeywell Phase V Women Empowerment on Advanced IT Skills covering topics like SQL Basics, Azure Fundamentals and Power BI",
      duration: "Febraury 2025- March 2025",
      instructor: "Mr. Anoop H A",
    },
    {
      title: "Gen-AI Study Jam 2024",
      description:
        "Earned multiple badges while exploring Generative AI concepts and applications through Google Cloud.",
      duration: "May 2024",
      instructor: "Google Cloud",
    },
    {
        title: "Web Development",
        description:
          "Conducted by Engineering Core in association with IIIT Allahabad, covering HTML, CSS, JavaScript, and React.",
        duration: "August 2023 - September 2023",
        instructor: "IIIT Allahabad",
    },
    {
        title: "Python Programming Basics",
        description:
          "Learned fundamentals of Python, loops, functions, and GUI development using Tkinter.",
        duration: "August 2022 - September 2022",
        instructor: "Prof. Bhanu Pratap Rai",
    },
  ];

  return (
    <section id="training" className="section">
      <div className="container">
        <h1 className="title">My Training</h1>
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
          {trainingPrograms.map((program, index) => (
            <motion.div
              className="column is-half"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">{program.title}</p>
                </div>
                <div className="card-content">
                  <p>{program.description}</p>
                  <p>
                    <strong>Duration:</strong> {program.duration}
                  </p>
                  <p>
                    <strong>Instructor:</strong> {program.instructor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Training;
