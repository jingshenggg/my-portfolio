import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Hyundai AutoEver",
      period: "2023 – Present",
      description: [
        "Designed and implemented ETL pipelines for large-scale data processing",
        "Worked with Python, SQL, Spark, Databricks, Hadoop, and Hive",
        "Maintained and optimized API services on Hadoop clusters",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "XYZ Solutions",
      period: "2021 – 2023",
      description: [
        "Built and deployed web applications using React, Node.js, and PostgreSQL",
        "Collaborated with cross-functional teams to deliver end-to-end solutions",
        "Introduced CI/CD practices for faster releases",
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
              <h2>{role}</h2>
              <h3>{company}</h3>
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
