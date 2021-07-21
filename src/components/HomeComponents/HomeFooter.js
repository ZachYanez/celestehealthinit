import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

export default function HomeNav() {
  return (
    <div>
      <Navbar className="primary" expand="lg">
        <Navbar.Brand href="#home">Celeste Health Initiative</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#WeAre">We Are</Nav.Link>
            <NavDropdown title="The Challenges" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Impact">Global Impact</Nav.Link>
            <Nav.Link href="#Stories and News">Stories and News</Nav.Link>
            <NavDropdown>
              <NavDropdown.Item href="/">Get Involved Item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="light">Donate</Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="space"></div>
      <div className="d-flex justify-content-center" style={{ height: 40 }}>
        <p>Celeste Health Initiative 2021 | All Rights Reserved</p>
      </div>
    </div>
  );
}
