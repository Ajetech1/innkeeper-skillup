import React, { useState } from "react";
import TestimonialVideo from "./TestimonialVideo";
import { MdKeyboardArrowRight } from "react-icons/md";

const TestimonialVideos = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const testimonials = [
    {
      id: 0,
      witness: "Oladayo",
      source: "https://www.youtube.com/embed/R8kpUUydUCM",
    },
    {
      id: 1,
      witness: "Gloria",
      source: "https://www.youtube.com/embed/_KrhxOiFX8o",
    },
    {
      id: 3,
      witness: "Ella",
      source: "https://www.youtube.com/embed/Fwx2xLv-sFc",
    },
    {
      id: 4,
      witness: "Loveline",
      source: "https://www.youtube.com/embed/rkP42Wz7hMI",
    },
  ];
  const crntID = () => {
    setCurrentVideo((prevCurrentVideo) =>
      prevCurrentVideo < testimonials.length - 2 ? prevCurrentVideo + 2 : 0
    );
  };

  return (
    <div className="row gx-5 container-fluid mx-auto px-5 position-relative">
      {testimonials
        .slice(currentVideo, currentVideo + 2)
        .map((testimony, index) => (
          <div key={index + currentVideo} className="col-6">
            <TestimonialVideo
              source={testimony.source}
              witness={testimony.witness}
            />
          </div>
        ))}

      <MdKeyboardArrowRight
        onClick={crntID}
        className="bg-light position-absolute end-0 top-50 rounded-circle"
        style={{ height: "40px", width: "40px" }}
      />
    </div>
  );
};

export default TestimonialVideos;
