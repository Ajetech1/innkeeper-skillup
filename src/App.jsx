import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import CoursesPage from "./Pages/LandingPage/CoursesPage";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import AccountPage from "./Pages/ApplicationForm/ApplicationForm";

function App() {
  return (
    <>
      <LandingPage />
    </>
    <Router>
      <h1>you are mine</h1>
      <TopNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
