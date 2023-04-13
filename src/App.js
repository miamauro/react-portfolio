import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        {/* <Route exact path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
