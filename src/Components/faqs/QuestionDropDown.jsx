import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const QuestionDropDown = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = () => {
    if (showAnswer) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  };
  return (
    <div className="border border-dark p-2 mb-2 fs-5">
      <div className="d-flex justify-content-between align-items-center">
        <p className="mt-2">{question}</p>
        <IoIosArrowDown onClick={handleAnswer} />
      </div>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default QuestionDropDown;
