import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heroimage from "../assets/images/landingpage-hero.png";
import "../assets/css/HeroSection.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section" style={{ padding: "80px 0" }}>
      <Row className="align-items-center">
        <Col md={7}>
          <Image src={Heroimage} fluid alt="Hero Image" />
        </Col>
        <Col md={4} className="hero-section-text">
          <h2>Kickstart a career in Tech and become globally valuable</h2>
          <p className="hero-section-paragraph">
            We are a digital Inn that makes tech career transitioning easy
            through mentored training and career portfolio building.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
