import React from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialVideos from "./TestimonialVideos";

const OurVideoTestimonials = () => {
  return (
    <>
      <div className="bg-info-subtle text-center p-5">
        <TestimonialHeader ourWhat={"Our Video Testimonials"} headerCaption={"Hear what our talents are saying about their training and placements"} />
        <TestimonialVideos />
      </div>
    </>
  );
};

export default OurVideoTestimonials;
