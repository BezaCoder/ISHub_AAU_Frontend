import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "none";
            void entry.target.offsetHeight;
            entry.target.style.animation = "";
            entry.target.style.animationPlayState = "running";
          } else {
            entry.target.style.animationPlayState = "paused";
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
