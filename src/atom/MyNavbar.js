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
            <Nav.Link href="/Q1">Q1</Nav.Link>
            <Nav.Link href="/Q2">Q2</Nav.Link>
            <Nav.Link href="/Q3">Q3</Nav.Link>
            <Nav.Link href="/Q4">Q4</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default MyNavbar;
