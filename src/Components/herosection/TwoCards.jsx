import React from "react";
import Card from "./Card";
import iconOne from "/cardIcon1.png"
import iconTwo from "/cardIcon2.png"

const TwoCards = () => {
  return (
    <div className="d-flex flex-md-row flex-col  gap-5 px-5">
      <Card className="text-center" cardTitle={"Our Vision"} caption={"To be established as Africa’s leading talent development organization with a truly global alumnus."} cardIcon={iconOne} />
      
      <Card cardTitle={"Our Mission"} caption={"To provide upskilling for sought-after roles through global collaboration and diverse learning methods To empower individuals in Africa with employability, entrepreneurship, and leadership skills to become catalysts for change."} cardIcon={iconTwo} />
    </div>
  );
};

export default TwoCards;
