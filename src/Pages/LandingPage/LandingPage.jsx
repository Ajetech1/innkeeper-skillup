/* eslint-disable no-unused-vars */
import React from "react"
import OurVideoTestimonials from "../../Components/ourVideoTestimonials/OurVideoTestimonials";
import OurReviews from "../../Components/ourReviews/OurReviews";
import Faqs from "../../Components/faqs/Faqs"
import TopNavbar from "../../Components/TopNavbar";
import HeroSection from "../../Components/HeroSection1";
import WhyChooseUs from "../../Components/WhyChooseUs";
import WhoWeWorkWith from "../../Components/WhoWeWorkWith";


function LandingPage() {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <WhyChooseUs />
      <WhoWeWorkWith/>
      <OurVideoTestimonials />
      <OurReviews />
      <Faqs />
  
    </div>
  );
}

export default LandingPage;
