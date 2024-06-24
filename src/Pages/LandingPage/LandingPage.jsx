import React from "react";
import OurVideoTestimonials from "../../Components/ourVideoTestimonials/OurVideoTestimonials";
import OurReviews from "../../Components/ourReviews/OurReviews";
import Faqs from "../../Components/faqs/Faqs";
import TopNavbar from "../../Components/TopNavbar";
import HeroSection from "../../Components/HeroSection1";
import PopularCourses from "../../Components/PopularCourses";
import AboutUs from "../../Components/AboutUs";

function LandingPage() {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <PopularCourses />
      <AboutUs />
      <OurVideoTestimonials />
      <OurReviews />
      <Faqs />
    </div>
  );
}

export default LandingPage;
