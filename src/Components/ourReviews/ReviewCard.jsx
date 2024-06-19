import React from "react";

const ReviewCard = ({ witnessImg, witnessName, testimony }) => {
  return (
    <>
      <div>
        <img src={witnessImg} alt="testimonial giver" />
        <p>{ witnessName }</p>
        <p>{ testimony }</p>
      </div>
    </>
  );
};

export default ReviewCard;
