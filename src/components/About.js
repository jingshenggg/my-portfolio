import React from "react";
import "./About.css";

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
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2 years <br /> Software Development & Data Engineering</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Bachelors in Electrical & Electronic Engineering <br />
                Specialization: Computer Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a Data Engineer passionate about building robust ETL
              pipelines and scalable data systems. My work involves Python,
              SQL, Spark, and Databricks to design workflows that turn raw data
              into actionable insights.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}

export default About;
