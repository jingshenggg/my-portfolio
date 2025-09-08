import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {[
            {
              title: "Data Pipeline with Spark",
              img: "/assets/project-1.png",
              github: "https://github.com/",
              demo: "https://github.com/",
            },
            {
              title: "ETL Pipeline with Airflow",
              img: "/assets/project-2.png",
              github: "https://github.com/",
              demo: "https://github.com/",
            },
            {
              title: "Dashboard with React",
              img: "/assets/project-3.png",
              github: "https://github.com/",
              demo: "https://github.com/",
            },
          ].map(({ title, img, github, demo }) => (
            <div className="details-container color-container" key={title}>
              <div className="article-container">
                <img src={img} alt={title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(github, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(demo, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

export default Projects;
