import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col col-3 text-end">
          <Header />
        </div>
        <div className="col-8 text-center">
          <Routes>
            <Route exact path="/react-portfolio" element={<About />} />
            <Route
              exact
              path="/react-portfolio/portfolio"
              element={<Portfolio />}
            />
            <Route
              exact
              path="/react-portfolio/contact"
              element={<Contact />}
            />
            <Route exact path="/react-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
