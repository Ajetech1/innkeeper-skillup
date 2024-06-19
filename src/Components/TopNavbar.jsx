import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/images/innkeeper.png";
import "../assets/css/TopNavbar.css";

const TopNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto me-3">
            <FormControl
              type="search"
              placeholder="Search for courses"
              className="me-2"
              aria-label="Search"
            />
            <FaSearch className="search-icon" />
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/account">
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
