import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Hyundai Motor Group Innovation Center Singapore",
      period: "2025 – Present",
    },
    {
      role: "Data Engineer",
      company: "Azendian Solutions",
      period: "2024 – 2025",
    },
    {
      role: "Software Engineer Full-Stack Web",
      company: "Anacle Systems",
      period: "2023 – 2024",
    },
    {
      role: "Part-time IT Assistant/Administrator",
      company: "NTU Asian School of the Environment",
      period: "2020 – 2023",
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Work Experience</h1>
      <div className="timeline-container">
        {experiences.map(({ role, company, period, description }, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{company} ({role})</h3>
              <span className="period">{period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
