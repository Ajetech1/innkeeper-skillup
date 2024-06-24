import React from "react";
import QuestionDropDowns from "./QuestionDropDowns";
import FaqsDemo from "./FaqsDemo";
import { Row, Col } from "react-bootstrap";

const FaqsBody = () => {
  return (
    <Row className="py-1">
      <Col>
        <QuestionDropDowns className="col-6" />
      </Col>
      <Col>
        <FaqsDemo className="col-6" />
      </Col>
    </Row>

    /*
    <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    */
  );
};

export default FaqsBody;
