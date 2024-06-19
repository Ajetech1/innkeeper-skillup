import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/PrimaryButton.css";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className="primary-button"
      style={{
        ...props.style, // Allow overriding styles if passed
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
