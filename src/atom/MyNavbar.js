import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          {/* <Navbar.Brand href="#home">Company Logo</Navbar.Brand> */}
          <Nav className="mr-auto">
            <Nav.Link href="/Q1">Question1</Nav.Link>
            <Nav.Link href="/Q2">Question2</Nav.Link>
            <Nav.Link href="/Q3">Question3</Nav.Link>
            <Nav.Link href="/Q4">Question4</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default MyNavbar;
