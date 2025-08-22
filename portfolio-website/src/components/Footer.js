// src/components/Footer.js
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/BezaCoder" target="_blank" rel="noreferrer">
          <GitHubIcon className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/bezawit-yeshiwas"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://www.instagram.com/beza.2129/#">
          <InstagramIcon className="icon" />
        </a>
      </div>
      <p className="footer-text">
        <span className="footer-name">Made with 💙 by Bezawit Yeshiwas</span> ©{" "}
        {new Date().getFullYear()} . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
