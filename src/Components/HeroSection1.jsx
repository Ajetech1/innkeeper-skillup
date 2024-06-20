import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Heroimage1 from "../assets/images/Hero-image1.png";
import Heroimage2 from "../assets/images/Hero-image2.png";
import Heroimage3 from "../assets/images/Hero-image3.png";
import Heroimage4 from "../assets/images/Hero-image4.png";
import "../assets/css/HeroSection.css";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section" style={{ padding: "80px 0" }}>
      <Row className="align-items-center">
        <Col md={7} xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Heroimage1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Heroimage2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Heroimage3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Heroimage4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4} className="hero-section-text">
          <h2>Kickstart a career in Tech and become globally valuable</h2>
          <p className="hero-section-paragraph">
            We are a digital Inn that makes tech career transitioning easy
            through mentored training and career portfolio building.
          </p>
          <PrimaryButton onClick={() => alert("Button clicked!")}>
            Apply
          </PrimaryButton>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
