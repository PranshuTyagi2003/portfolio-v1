import React from "react";
// import "./components/style.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
