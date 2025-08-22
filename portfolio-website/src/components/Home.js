// Home.js
import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="fade-up" style={{ animationDelay: "0.2s" }}>
          Hi, I’m Bezawit Yeshiwas
        </h1>
        <p className="fade-up" style={{ animationDelay: "0.5s" }}>
          I’m a Frontend Web Developer passionate about creating beautiful and
          functional web experiences.
        </p>
        <a
          href="#contact"
          className="btn fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
