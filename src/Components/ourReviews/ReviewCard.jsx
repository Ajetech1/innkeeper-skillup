import React from "react";

const ReviewCard = ({ witnessImg, witnessName, testimony }) => {
  return (
    <>
      <div className="">
        <img src={witnessImg} alt="testimonial giver" className="img-fluid" />
        <p className="fw-bold">{witnessName}</p>
        <p className="px-4 text-start">{testimony}</p>
      </div>
    </>
  );
};

export default ReviewCard;
