import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Yug Kansara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1y7fV3dNIYt69IG7GzdQnsiEC76ECtGlG/view?usp=sharing">
              CV
            </Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
