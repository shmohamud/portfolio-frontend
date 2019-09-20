import React, { Component } from "react";
import {Col, Row, Container} from 'react-bootstrap'


export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <Row>
      <div
        style={{
          border: "solid black",
          borderStyle: "outset",
          width: "150px",
          height: "150px"
        }}
      >
        <p style={{ textAlign: "center", top: "50%" }}>{this.state.count}</p>
      </div>
      </Row>
    );
  }
}
