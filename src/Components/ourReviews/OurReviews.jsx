import React from "react";
import TestimonialHeader from "../ourVideoTestimonials/TestimonialHeader";
import ReviewCard from "./ReviewCard";
import sanni from "/sanniJetro.png";
import Efoghe from "/EfogheJoy.png";
import Blessing from "/BlessingNwanchukwu.png";


const OurReviews = () => {
  return (
    <>
      <div className="bg-info-subtle text-center">
        <TestimonialHeader ourWhat={"Our Reviews"} headerCaption={"Get inspired by what our talents are saying"} />
        
        <div className="d-flex flex-lg-row flex-column p-4">
            <ReviewCard witnessImg={sanni} witnessName={"Sanni Jetro"} testimony={"I love the instructors at Innkeeper, always looking out for students and this has really helped my learning progress"}  />
            <ReviewCard witnessImg={Efoghe} witnessName={"Efoghe Joy"} testimony={"I love the instructors at Innkeeper, always looking out for students and this has really helped my learning progress"}  />
            <ReviewCard witnessImg={Blessing} witnessName={"Blessing Nwanchukwu"} testimony={"I love the instructors at Innkeeper, always looking out for students and this has really helped my learning progress"}  />
        </div>

      </div>
    </>
  );
};

export default OurReviews;
