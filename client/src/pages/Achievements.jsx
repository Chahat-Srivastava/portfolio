import React from "react";
import '../styles/Achievements.css'
import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      title: "Secretary - UGI Toastmasters Club",
      description:
        "Managed club operations, organized meetings, and contributed to club growth and success.",
      date: "May 2023 - December 2023",
    },
    {
      title: "Chartered Member - UGI Toastmasters Club",
      description:
        "Played a crucial role in establishing the Toastmasters chapter and growing its membership.",
      date: "May 2023 - September 2024",
    },
    {
      title: "Runner Up at UHack 2.0",
      description:
        "Competed in a 20-hour hackathon, showcasing technical skills and innovative solutions.",
      date: "October 2023",
    },
    {
      title: "Finalist at WIEHack 5.0",
      description:
        "Participated in a 36-hour women-centric virtual hackathon, organized by IEEE, BVCOE.",
      date: "April 2024",
    },
    {
      title: "Ranked in the Top 70 at HackFest 24",
      description:
        "Competed in a 36-hour hackathon at IIT Dhanbad (ISM), where our team ranked in the top 70.",
      date: "May 2024",
    },
    {
      title: "Badges Earned in Gen-AI Study Jam 2024",
      description:
        "Earned multiple badges in the Gen-AI Study Jam 2024, organized by Google Cloud.",
      date: "May 2024",
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h1 className="title has-text-centered">My Achievements</h1>
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
          {achievements.map((achievement, index) => (
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
                  <p className="card-header-title">{achievement.title}</p>
                </div>
                <div className="card-content">
                  <p>{achievement.description}</p>
                  <p>
                    <strong>{achievement.date}</strong>
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

export default Achievements;
