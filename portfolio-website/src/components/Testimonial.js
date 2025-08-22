// Testimonial.js
import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div
        className="testimonial-container fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="card fade-up" style={{ animationDelay: "0.3s" }}>
            <p>
              "Bezawit is an amazing developer! Always delivers clean and
              responsive code."
            </p>
            <h4>- Colleague Tsedeniya Zena</h4>
          </div>
          <div className="card fade-up" style={{ animationDelay: "0.5s" }}>
            <p>
              "Working with Bezawit was a pleasure — highly skilled and
              collaborative."
            </p>
            <h4>- Classmate Liya Esayiyas</h4>
          </div>
          <div className="card fade-up" style={{ animationDelay: "0.7s" }}>
            <p>
              "Creative and dedicated! I highly recommend Bezawit for web
              projects."
            </p>
            <h4>- Client Nahom Solomon</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
