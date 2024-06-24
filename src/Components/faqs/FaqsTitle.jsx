import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FaqsTitle = () => {
  return (
    <div className="fs-4 text-center">
      <div className="container d-flex gap-3 align-items-center justify-content-center text-center">
        <p>
          Unclear about how to apply?{" "}
          <span className="fw-bolder">See how to apply</span>
        </p>
        <FaArrowRightLong />
      </div>

      <div>
        <p>
          Do you have questions you want to ask about our services, and
          partnerships and courses?
        </p>
        <p>
          Check our{" "}
          <span className="fw-bolder">frequently questions (FAQS)</span> below{" "}
        </p>
      </div>
    </div>
  );
};

export default FaqsTitle;
