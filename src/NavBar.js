import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Fragment } from "react";

const NavBar = props => {
  return (
    <Fragment>
      <Navbar bg="light" variant='light' expand="lg">
        <Nav>
          <div style={{display:'flex', textAlign:'none', justifyContent:'center'}}> 
            <Container>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/demos">
              <Nav.Link>Project Demos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link>E-Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/interests">
              <Nav.Link> About </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            </Container>
          </div>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default withRouter(NavBar);
