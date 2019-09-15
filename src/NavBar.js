import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


const NavBar = props => {
  return (
    <Navbar style={{marginBottom: "0"}} inverse className="fixed-top collapseOnSelect nav-bar" bg="light" expand="lg">
      <Nav className="mr-auto">
      <LinkContainer to="/home">
          <Nav.Link style={{paddingLeft:"100", paddingRight:"100"}}>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/demos">
          <Nav.Link>Project Demos</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/resume">
          <Nav.Link>E-Resume</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/interests">
          <Nav.Link>Interests</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
      
    </Navbar>
  )
};



export default withRouter(NavBar)
       
 