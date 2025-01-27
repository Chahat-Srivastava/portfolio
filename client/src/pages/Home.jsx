import React from "react";
import '../styles/Home.css';
import Github from "../assets/github.png";
import Leetcode from "../assets/leetcode.png";
import Linkedin from "../assets/linkedin.png";
import GFG from "../assets/gfg.png";
import Codeforces from "../assets/codeforces.png";

function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero is-fullheight has-background-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          {/* Main Title and Subtitle */}
          <h1 className="title is-1 has-text-light">Welcome to My Portfolio</h1>
          <p className="subtitle is-3 has-text-light">
            I’m a passionate Software Developer and Machine Learning enthusiast.
          </p>

          {/* Brief Introduction */}
          <div className="content has-text-light mt-5">
            <p className="is-size-4">
              As a final-year B.Tech student specializing in Computer Science
              and Engineering, I am dedicated to solving real-world problems
              using innovative technology solutions. With expertise in web
              development (MERN stack) and machine learning, I have worked on
              various projects that blend creativity and technology to bring
              meaningful impacts.
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links mt-6">
            <p className="has-text-light is-size-4 mb-4">Connect with me:</p>
            <div className="icon-container">
              <a
                href="https://github.com/Chahat-Srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img src={Github} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/chahat-srivastava-1ba0b6215/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://leetcode.com/u/chahatsrivastava019/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img src={Leetcode} alt="LeetCode" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/chahatsrivastava019/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img src={GFG} alt="GeeksforGeeks" />
              </a>
              <a
                href="https://codeforces.com/profile/ChahatSri"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <img src={Codeforces} alt="Codeforces" />
              </a>
            </div>
          </div>


          {/* Button to learn more */}
          <div className="mt-6">
            <button className="button is-dark is-large mt-4">
            <a href="#/about">
              Learn More
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
