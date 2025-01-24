import React from "react";
import myPhoto from "../assets/my-photo.jpg"; // Import your photo
import '../styles/About.css';
import { motion } from "framer-motion"; // Import Framer Motion for animations

function About() {
  return (
    <section id ="about" className="section dark-background">
      <div className="container">
        <h1 className="title has-text-centered has-text-light">About Me</h1>
        <div className="columns is-vcentered mt-5">
          {/* Image Column */}
          <div className="column is-one-third has-text-centered">
            <motion.figure
              className="image is-256x256 is-inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                className="is-rounded"
                src={myPhoto}
                alt="Your Name"
                style={{
                  border: "5px solid #3273dc", // Add a primary color border
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow for beauty
                  borderRadius: "50%", // Rounded image
                }}
              />
            </motion.figure>
          </div>

          {/* Text Column */}
          <div className="column">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              {/* Name Animation */}
              <motion.p
                className="content is-size-4 has-text-weight-bold"
                style={{
                  fontSize: "2rem",
                  color: "#3273dc", // Primary color
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                My name is Chahat Srivastava
              </motion.p>

              <motion.p
                className="content is-size-5"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.8",
                  color: "#E1E1E1", // Light color for dark background
                  fontWeight: "bold",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <strong>Welcome to My Portfolio!</strong>
              </motion.p>

              <motion.p
                className="content is-size-5"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#E1E1E1", // Light text color
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                I am a passionate Software Developer specializing in Web
                Development (MERN stack) and Machine Learning. As a final-year
                B.Tech student in Computer Science and Engineering, I thrive on
                crafting innovative solutions to complex problems.
              </motion.p>
              <motion.p
                className="content is-size-5"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#E1E1E1", // Light text color
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                From designing user-friendly applications to building
                intelligent models, I aim to merge technology with creativity to
                make a meaningful impact. My projects, like{" "}
                <em>Neuro Nirvana</em> and chronic disease detection systems,
                reflect my commitment to leveraging AI and web technologies to
                address real-world challenges.
              </motion.p>
              <motion.p
                className="content is-size-5"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#E1E1E1", // Light text color
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                Explore my portfolio to discover my journey through hackathons,
                hands-on projects, and achievements in tech. Let's build the
                future together!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
