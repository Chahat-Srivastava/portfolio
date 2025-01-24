import React from "react";

function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero dark-background is-fullheight">
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

          {/* Button to learn more */}
          <div className="mt-6">
            <button className="button is-light is-large mt-4">
            <a href="about">
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
