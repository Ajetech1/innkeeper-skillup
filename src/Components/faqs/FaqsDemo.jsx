import React from "react";
import faqImg from "/faqs-img.png";

const FaqsDemo = () => {
  return (
    <div className="text-lg-start text-center pt-lg-0 pt-3 fs-5">
      <div className="px-3">
        <h3>Frequently asked questions.</h3>
        <p>click on the arrow icon to see responses to each question.</p>
        <p>
          For further enquiry about topics absent in the FAQS section, kindly{" "}
          <span>Contact Us</span>
        </p>
      </div>

      <img src={faqImg} alt="" className="img-fluid" />
    </div>
  );
};

export default FaqsDemo;
