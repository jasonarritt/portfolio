import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar id="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/about"
            className="mx-5  my-nav"
            id="name"
          >
            Jason Arritt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse className="flex-end" id="navbar">
            <Nav className="ml-auto">
              <Nav.Link
                as={Link}
                to="/about"
                className="mx-3 my-nav navbar-link"
                id="about-nav"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="mx-3 my-nav navbar-link"
                id="contact-nav"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/portfolio"
                className="mx-3 my-nav navbar-link"
                id="portfolio-nav"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                className="mx-3 my-nav navbar-link"
                id="resume-nav"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
