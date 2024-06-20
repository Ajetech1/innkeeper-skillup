import React from 'react'
import style from './contactPage.module.css';
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-bootstrap'
function MyNavbar() {
	return(
	<>
		<Navbar bg="light" expand="lg" sticky="top">
		<Container>
		<Navbar.Brand href="/">Logo</Navbar.Brand>

		<Navbar.Toggle aria-controls="basic-navbar-nav" />

		<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="ms-auto">

		<Nav.Link as={NavLink} to="/">
		Home
		</Nav.Link>

		 <Nav.Link as={NavLink} to="/" end>
                About
                </Nav.Link>
			
		<NavDropdown title="Course" id="basic-nav-dropdown">
		<NavDropdown.Item as={NavLink} to="course">
		Course Not Available for now
		</NavDropdown.Item>
		</NavDropdown>

		</Nav>

		<Button variant="primary" clasName="ms-auto">
		Apply Here
		</Button>

		</Navbar.Collapse>
		</Container>
		</Navbar>
	</>
	)
}
export default MyNavbar;
