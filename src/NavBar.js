import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Row } from "react-bootstrap";

const NavBar = props => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="https://ih0.redbubble.net/image.523773899.2261/flat,550x550,075,f.u4.jpg"
          width="90"
          height="80"
          padding="0 100"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src="https://miro.medium.com/max/375/1*qsMH3spHzOErEBvK0-fKWw@2x.jpeg"
          width="80"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src="https://www.thoughtco.com/thmb/JpBnEUWE4Szf34r-7z0pKoQUPCs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/2000px-Ruby-logo-R.svg-56a811b75f9b58b7d0f05e83.jpg"
          width="80"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/4223"
          width="80"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />

        <img
          alt=""
          src="https://i2.wp.com/blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500"
          width="80"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src="https://i.ytimg.com/vi/xCGPPimXgJU/maxresdefault.jpg"
          width="80"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src="https://scriptverse.academy/img/tutorials/react-router.png"
          width="160"
          height="80"
          padding="0 10"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <br></br>
      <br></br>
      <div>
        <Nav className="mr-auto">
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
        </Nav>
      </div>
    </Navbar>
  );
};

export default withRouter(NavBar);
