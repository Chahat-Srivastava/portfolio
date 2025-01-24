import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGit, FaDatabase, FaCogs, FaTerminal } from "react-icons/fa";
import { SiMysql, SiKeras, SiTensorflow, SiJupyter, SiFigma, SiScikitlearn, SiMongodb } from "react-icons/si";
import '../styles/Skills.css'; // Import the CSS file

function Skills() {
  return (
    <section className="section dark-background">
      <div className="container">
        <h1 className="title has-text-centered has-text-light">Technical Skills</h1>
        <div className="columns is-multiline is-centered mt-5">
          {/* Python */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaPython size={60} color="#FFD43B" />
            <p className="mt-3 has-text-light">Python</p>
          </div>

          {/* C */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaCogs size={60} color="#00599C" />
            <p className="mt-3 has-text-light">C</p>
          </div>

          {/* HTML5 */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaHtml5 size={60} color="#E34F26" />
            <p className="mt-3 has-text-light">HTML5</p>
          </div>

          {/* CSS3 */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaCss3Alt size={60} color="#1572B6" />
            <p className="mt-3 has-text-light">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaJs size={60} color="#F7DF1E" />
            <p className="mt-3 has-text-light">JavaScript</p>
          </div>

          {/* ReactJS */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaReact size={60} color="#61DBFB" />
            <p className="mt-3 has-text-light">ReactJS</p>
          </div>

          {/* MySQL */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiMysql size={60} color="#4479A1" />
            <p className="mt-3 has-text-light">MySQL</p>
          </div>
        
        {/* MongoDB */}
        <div className="column is-one-quarter has-text-centered skill-item">
            <SiMongodb size={60} color="#47A248" />
            <p className="mt-3 has-text-light">MongoDB</p>
          </div>


          {/* Machine Learning - Scikit-Learn */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiScikitlearn size={60} color="#F7931E" />
            <p className="mt-3 has-text-light">Scikit-Learn</p>
          </div>

          {/* Machine Learning - Neural Networks */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiKeras size={60} color="#D32F2F" />
            <p className="mt-3 has-text-light">Keras</p>
          </div>

          {/* Tensorflow */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiTensorflow size={60} color="#FF6F00" />
            <p className="mt-3 has-text-light">TensorFlow</p>
          </div>

          {/* VSCode */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaTerminal size={60} color="#000000" />
            <p className="mt-3 has-text-light">VSCode</p>
          </div>

          {/* Data Science - Numpy */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaDatabase size={60} color="#47A248" />
            <p className="mt-3 has-text-light">Numpy</p>
          </div>

          {/* Data Science - Pandas */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaDatabase size={60} color="#47A248" />
            <p className="mt-3 has-text-light">Pandas</p>
          </div>

          {/* Data Science - Matplotlib */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaDatabase size={60} color="#47A248" />
            <p className="mt-3 has-text-light">Matplotlib</p>
          </div>

          {/* Jupyter Notebook */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiJupyter size={60} color="#F37626" />
            <p className="mt-3 has-text-light">Jupyter Notebook</p>
          </div>

          {/* GitHub */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <FaGit size={60} color="#F1502F" />
            <p className="mt-3 has-text-light">GitHub</p>
          </div>

          {/* Figma */}
          <div className="column is-one-quarter has-text-centered skill-item">
            <SiFigma size={60} color="#F24E1E" />
            <p className="mt-3 has-text-light">Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
