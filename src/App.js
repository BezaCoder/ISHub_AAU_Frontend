import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollAnimation from "./useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
