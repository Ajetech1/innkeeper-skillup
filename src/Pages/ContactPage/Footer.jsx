import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa'
import style from './footer.module.css'
const Footer = () =>{
	return (
    <footer className={style.footer}>
      <Container className="p-4">
        <Row>
          <Col xs={6} sm={3} md={3}>
            <h5 className="basic">Basic</h5>
              <p>
                <a href="/">About Us</a>
              </p>
              <p>
                <a href="/">Contact Us</a>
              </p>
              <p>
                <a href="/">Privacy Policy</a>
              </p>
              <p>
                <a href="/">Terms & Conditions</a>
              </p>
              <p>
                <a href="/">Support Center</a>
              </p>
          </Col>

          <Col>
            <h5 className="course">Course</h5>
              <p>
                <a href="/">Frontend Development</a>
              </p>
              <p>
                <a href="/">Digital Marketing</a>
              </p>
              <p>
                <a href="/">UI/UX Design</a>
              </p>
              <p>
                <a href="/">Data Analyis</a>
              </p>
              <p>
                <a href="/">Cybersecurity</a>
              </p>
          </Col>

          <Col>
            <h5 className="contact">Contact Us</h5>
              <p>
                <a href="/">
                  <FaMapMarkerAlt /> Innkeeper Hackerspace, 11 Collin Onabuale
                  Crescent,<br></br>Diamond Estae Magodo Phase 2
                </a>
              </p>
              <p>
                <a href="/">
                  <FaEnvelope /> Academy@innkeeper.work
                </a>
              </p>
              <p>
                <a href="/">
                  <FaPhone /> +234 813 701 1735
                </a>
              </p>
            
          </Col>

          <Col>
            <h5 className="social">Social Media</h5>
              <p>
                <a href="/">
                  <FaFacebook /> Facebook
                </a>
              </p>
              <p>
                <a href="/">
                  <FaTwitter /> Twitter
                </a>
              </p>
              <p>
                <a href="/">
                  <FaInstagram /> Instagram
                </a>
              </p>
              <p>
                <a href="/">
                  <FaLinkedin /> Linkedin
                </a>
              </p>
            
          </Col>
        </Row>
        <p className={style.copyright}>
          &copy;2024 innkeeper.work all reserved.
        </p>
      </Container>
    </footer>
  );
}
export default Footer;
