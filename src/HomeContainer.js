import ImageBox from "./ImageBox";
import Counter from "./Counter";
import Content from "./Content";
import { Container, Row } from "react-bootstrap";
import React, { Component } from "react";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Content />
          <ImageBox />
          <Counter />
        </Container>
      </div>
    );
  }
}
