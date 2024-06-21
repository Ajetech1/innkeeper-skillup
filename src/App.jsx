import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./Components/footer/Footer";
import PopularCourses from "./Components/PopularCourses";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
import ApplicationForm from "./Pages/ApplicationForm/ApplicationForm";

function App() {
  return (
    <Router>
      <TopNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<PopularCourses />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/account" element={<ApplicationForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
