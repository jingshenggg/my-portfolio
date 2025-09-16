import React from "react";
import "./Sidehustles.css";

function Sidehustles() {
  const sidehustles = [
    {
      role: "Content Creator",
      company: "YouTube Channel",
      period: "2025 - Present",
      projects: [
        {
          title: "Travel Vlogs",
          description: ["Created travel vlogs."],
          videos: ["qA4seXB4Exw", "nP1D96R2XGk"],
        },
        {
          title: "Piano Journey",
          description: ["Self-learned piano journey"],
          videos: ["hMMxk2U0OqU", "lyyz1FUgk_c"],
        },
      ],
    },
    {
      role: "Freelancer",
      company: "Shopee",
      period: "2025 - Present",
      projects: [
        {
          title: "Online Store",
          description: ["Set up online store."],
          videos: [],
        },
      ],
    },
  ];

  return (
    <section id="sidehustles">
      <p className="section__text__p1">Sharing My</p>
      <h1 className="title">Side Hustles</h1>
      <div className="timeline-container">
        {sidehustles.map(({ role, company, period, projects }, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{company} ({role})</h3>
              <span className="period">{period}</span>

              {projects.map((proj, i) => (
                <div key={i} className="project-block">
                  <h4>{proj.title}</h4>
                  <ul>
                    {proj.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>

                  {proj.videos.length > 0 && (
                    <div className="video-container">
                      {proj.videos.map((videoId, k) => (
                        <iframe
                          key={k}
                          width="640"
                          height="360"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video ${k}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Sidehustles;
