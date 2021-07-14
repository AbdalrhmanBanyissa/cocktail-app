import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Cocktail App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Favorite">Favorite</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
