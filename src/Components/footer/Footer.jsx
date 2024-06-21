import React from "react";
import FirstFooter from "./FirstFooter";
import FinalFooter from "./FinalFooter";

const Footer = () => {
  return (
    <div className="px-5 bg-info-subtle">
      <FirstFooter />
      <hr className="bg-success" />
      <FinalFooter />
    </div>
  );
};

export default Footer;
