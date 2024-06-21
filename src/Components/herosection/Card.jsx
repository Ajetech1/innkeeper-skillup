import React from "react";

const Card = ({ cardIcon, cardTitle, caption }) => {
  return (
    <div
      className="p-4 w-50 d-flex flex-column align-items-center rounded-2"
      style={{ boxShadow: "2px 2px 3px black" }}
    >
      <img src={cardIcon} alt="" />
      <h2>{cardTitle}</h2>
      <p>{caption}</p>
    </div>
  );
};

export default Card;
