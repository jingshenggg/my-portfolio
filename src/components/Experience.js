import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Skills */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                { skill: "HTML", level: "Experienced" },
                { skill: "CSS", level: "Experienced" },
                { skill: "C# (.NET)", level: "Intermediate" },
                { skill: "JavaScript", level: "Basic" },
                { skill: "Python", level: "Intermediate" },
                { skill: "Material UI", level: "Intermediate" },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img src="/assets/checkmark.png" alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend & Databases</h2>
            <div className="article-container">
              {[
                { skill: "PostgreSQL", level: "Basic" },
                { skill: "Node.js", level: "Intermediate" },
                { skill: "Express.js", level: "Intermediate" },
                { skill: "Git", level: "Intermediate" },
                { skill: "MySQL", level: "Intermediate" },
                { skill: "MSSQL", level: "Intermediate" },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img src="/assets/checkmark.png" alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

export default Experience;
