import React from "react";
import { Navbar, Form, Button, Container, Row, Col } from "react-bootstrap";
import FAQ from "./FAQ";
import Footer from "./Footer";
const ContactPage = () => {
  return (
    <>
      <Container className="mt-5 d-flex flex-column align-items-center">
        <h1 className="mb-4 text-center">Contact Us</h1>
        <p className="text-center mb-5">
          Are you concerned and our FAQ has not given answers to all your
          questions? <br></br>Contact our amazing team today
        </p>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                ></Form.Control>
              </Form.Group>
              <br></br>
            </Col>
          </Row>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="you@gmail.com"
            ></Form.Control>
          </Form.Group>
          <br></br>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="+23400000030"></Form.Control>
          </Form.Group>
          <br></br>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="pb-5"
              type="textarea"
              row={3}
              placeholder="Enter a description....."
            ></Form.Control>
          </Form.Group>
          <br></br>

          <Button className="mt-3 mb-5 w-100" variant="primary" type="submit">
            Send Message
          </Button>
          <br></br>
        </Form>
      </Container>

      <Navbar bg="light" expand="lg" fixed="" className="p-5"></Navbar>
      <FAQ />
      <Navbar bg="light" expand="lg" fixed="" className="p-5"></Navbar>

      <Footer />
    </>
  );
};

export default ContactPage;
