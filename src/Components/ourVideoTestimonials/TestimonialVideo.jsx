import React from "react";

const TestimonialVideo = ({ witness, source }) => {
  return (
    <>
      <div className="mt-4">
        <iframe
          style={{ aspectRatio: "10/6", width: "100%" }}
          src={source}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p className="text-center">{witness}</p>
      </div>
    </>
  );
};

export default TestimonialVideo;
