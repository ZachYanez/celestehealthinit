import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import Info from "../components/WeAreComponents/Info";
import OurHistory from "../components/WeAreComponents/OurHistory";
import WhoWeAre from "../components/WeAreComponents/WhoWeAre";

export default function WeAre() {
  return (
    <>
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
          <Button variant="info">Donate</Button>
        </Navbar.Collapse>
      </Navbar>
      <WhoWeAre />
      <Info />
      <OurHistory/>
    </>
  );
}
