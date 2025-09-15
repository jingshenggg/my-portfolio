import React from "react";
import "./Sidehustles.css";

function Sidehustles() {
  const experiences = [
    {
      role: "Content Creator",
      company: "YouTube Channel",
      period: "2025 - Present",
      description: [
        "Created travel vlogs.",
      ],
      videos: [
        "qA4seXB4Exw",
        "nP1D96R2XGk",
      ],
    },
    {
      role: "Freelancer",
      company: "Shopee",
      period: "2025 - Present",
      description: [
        "Set up online store.",
      ],
      videos: [],
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Sharing My</p>
      <h1 className="title">Side Hustles</h1>
      <div className="timeline-container">
        {experiences.map(({ role, company, period, description, videos }, index) => (
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

              {/* YouTube videos embed */}
              {videos && videos.length > 0 && (
                <div className="video-container">
                  {videos.map((videoId, i) => (
                    <iframe
                    key={i}
                    width="640"
                    height="360"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player ${i}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sidehustles;
