import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Azendian Solutions",
      period: "2024 – 2025",
      description: [
        "Designed and implemented ETL pipelines for large-scale data processing",
        "Worked with Python, SQL, Spark, Databricks, Hadoop, and Hive",
        "Maintained and optimized API services on Hadoop clusters",
      ],
    },
    {
      role: "Software Engineer Full-Stack Web",
      company: "Anacle Systems",
      period: "2023 – 2024",
      description: [
        "Built and deployed web applications using React, Node.js, and PostgreSQL",
        "Collaborated with cross-functional teams to deliver end-to-end solutions",
        "Introduced CI/CD practices for faster releases",
      ],
    },
    {
      role: "Part-time IT Assistant",
      company: "NTU Asian School of the Environment",
      period: "2020 – 2023",
      description: [
        "Helped repair hard drives and troubleshoot software issues",
        "Assisted in setting up and maintaining computer for Professors",
        "Executed data entry and administrative tasks",
      ],
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
              <ul>
                {description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
