import React from "react";
import { Button } from "react-bootstrap";
import aboutUsImg from "/aboutUs.png";

const AboutUs = () => {
  return (
    <div className="d-flex flex-lg-row flex-column p-5 gap-5 align-items-center">
      <div className="w-50">
        <h1>About Us</h1>
        <p className="fw-medium">
          We source for, develop and place talents with brilliant visions and
          good attitude to learn internationally and locally.
        </p>
        <Button className="bg-body text-dark border-info">Know more...</Button>
      </div>
      <div>
        <img src={aboutUsImg} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default AboutUs;
