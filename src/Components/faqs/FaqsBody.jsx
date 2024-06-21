import React from "react";
import QuestionDropDowns from "./QuestionDropDowns";
import FaqsDemo from "./FaqsDemo";

const FaqsBody = () => {
  return (
    <div className="d-flex flex-lg-row flex-column justify-content-between gap-5 py-1">
      <QuestionDropDowns />
      <FaqsDemo />
    </div>
  );
};

export default FaqsBody;
