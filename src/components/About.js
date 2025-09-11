import React from "react";
import "./About.css";
import ExperienceIcon from "../assets/experience.png";
import EducationIcon from "../assets/education.png";


function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={ExperienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>More than 2 years <br /> Software Development & Data Engineering</p>
            </div>
            <div className="details-container">
              <img
                src={EducationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Nanyang Technological University 2019 - 2023 <br />
                Bachelor of Engineering (Electrical & Electronic Engineering) <br />
                with Honours (Distinction) <br />
                Specialization: Computer Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Welcome to my profile! I graduated from Nanyang Technological University (NTU) with a degree in Electrical & Electronic Engineering, specializing in Computer Engineering. This gave me a strong foundation in both software development and system-level problem solving.
              I began my career as a Full Stack Developer, gaining hands-on experience in building end-to-end applications. Over time, I discovered a deeper passion for data, which led me to specialize as a Data Engineer.
              Today, I focus on designing and building robust ETL pipelines and scalable data systems. My experience spans working with Python, SQL, Spark, Databricks, Hadoop, and Hive to transform raw data into actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
