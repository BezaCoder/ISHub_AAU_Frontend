// src/components/About.js
import React from "react";
import "./About.css";

export default function About() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Bootstrap", level: 75 },
    { name: "React", level: 70 },
  ];

  return (
    <section id="about" className="about fade-up">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I’m a fourth-year university student studying{" "}
          <strong>Information Systems</strong> at Addis Ababa University. I love
          building responsive and interactive web applications using HTML, CSS,
          JavaScript, Bootstrap, and React.
        </p>

        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  <span
                    className="skill-value"
                    style={{ left: `${skill.level}%` }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
