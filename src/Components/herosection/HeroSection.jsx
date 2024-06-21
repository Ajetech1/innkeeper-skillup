import React from "react";
import { Button } from "react-bootstrap";
import HeroImage from "/aboutUsHero.png";

const Herosection = () => {
  return (
    <div
      className="text-light text-center d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${HeroImage})`, height: "70vh" }}
    >
      <div style={{ width: "75%" }}>
        <h1 className="" >Welcome to where you skill up to stand out</h1>
        <p className="mt-1">
          We're a digital upskilling platform that combines independent and
          guided learning with quality local content and mentorship, aimed at
          fostering financial independence and equality in a safe space.
        </p>
        <Button className="bg-light text-dark py-3 px-5">Apply Now</Button>
      </div>
    </div>
  );
};

export default Herosection;
