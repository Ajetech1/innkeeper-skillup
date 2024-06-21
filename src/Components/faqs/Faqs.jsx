import React from "react";
import FaqsTitle from "./FaqsTitle";
import FaqsBody from "./FaqsBody";

const Faqs = () => {
  return (
    <>
      <div className="p-5">
        <FaqsTitle />
        <p className="fw-bolder text-center fs-2">FAQS</p>
        <FaqsBody />
        <p className="fs-3 text-center my-5">
          Still got questions? <span className="fw-bolder">Contact Us</span>
        </p>
      </div>
    </>
  );
};

export default Faqs;
