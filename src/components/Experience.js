import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Hyundai Motor Group Innovation Center Singapore",
      period: "2025 – Present",
      description: [
        "Developed scripts to run in Hadoop to monitor API health.",
      ],
    },
    {
      role: "Data Engineer",
      company: "Azendian Solutions",
      period: "2024 – 2025",
      description: [
        "Developed and optimized ETL processes, automation workflows, and data aggregation scripts using Python and C# (.NET), contributing to the design of ETL and data lake pipelines for multiple projects, including Keppel DHCS, NTU SBS Chiller Plant Optimization, Certis, and NUHS. ",
        "Developed scripts for BacNet and OPC UA communication protocols to Building Management System. ",
        "Implemented complex queries, stored procedures and database management in PostgreSQL, MSSQL and MySQL.",
        "Developed monthly data visualization reports for clients with Power BI. ",
        "Managed code repositories using GitLab, ensuring version control and collaboration across development teams. ",
        "Helped to troubleshoot, resolve bugs and maintain RESTful API in JavaScript for Keppel Chiller Plant web pages.",
        "Utilized JIRA to track and manage bugs and issues effectively. ",
        "Collaborated with the Project Manager to develop Functional Design Specifications, ensuring clear requirements and smooth project execution. "
      ],
    },
    {
      role: "Software Engineer Full-Stack Web",
      company: "Anacle Systems",
      period: "2023 – 2024",
      description: [
        "Proficiently developed web applications using ASP.NET framework with C# Programming Language.",
        "Utilized Object Relational Mapping (ORM) techniques to query backend SQL databases efficiently.",
        "Proficiently performed direct SQL queries utilizing SQL Server Management Studio for effective database management and troubleshooting purposes. ",
        "Utilized GitLab for managing code repositories, adept at resolving merge conflicts to ensure codebase integrity.",
        "Implemented comprehensive backend logic, unit testing scripts and maintained client-facing interfaces, promptly executing logic changes in response to client requests",
        "Developed RESTful APIs according to client specifications and rigorously tested its functionality using Postman.",
        "Contributed to improving and updating the logic within SQL scripts used for data generation, responding promptly to client requests for enhanced data analysis capabilities. ",
      ],
    },
    {
      role: "Part-time IT Assistant/Administrator",
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
