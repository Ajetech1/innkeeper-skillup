import React from "react";
import { Button } from "react-bootstrap";
import aboutUsImg from "/aboutUs.png";

const AboutUs = () => {
  return (
    <div className="row p-5 align-items-center text-md-start text-center">
      <div className="col-md-6 pb-md-0 pb-4">
        <h1>About Us</h1>
        <p className="fw-medium">
          We source for, develop and place talents with brilliant visions and
          good attitude to learn internationally and locally.
        </p>
        <Button
          className="bg-body text-dark"
          style={{ borderColor: "#556088" }}
        >
          Know more...
        </Button>
      </div>
      <div className="col-md-6">
        <img src={aboutUsImg} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default AboutUs;
