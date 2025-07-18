import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const headersection = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className=" container-first ">
        <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="Logo" style={{ height: '60px' }} />
         <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className=" nav-link ms-auto  ">
            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
            <Nav.Link as={Link} to="/projects">PROJECTS</Nav.Link>
            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/contacts">CONTACTS</Nav.Link>
          </Nav>
          <button className=" btn-first rounded-pill  border-0 ">LET'S TALK</button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default headersection;
