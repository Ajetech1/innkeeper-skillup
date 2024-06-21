import React from "react";
import OurVideoTestimonials from "../../Components/ourVideoTestimonials/OurVideoTestimonials";
import OurReviews from "../../Components/ourReviews/OurReviews";
import TopNavbar from "../../Components/TopNavbar";
import HeroSection from "../../Components/HeroSection1";
import PopularCourses from "../../Components/PopularCourses";

function LandingPage() {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <div>
        <PopularCourses />
      </div>
    </div>
  );
}

export default LandingPage;
