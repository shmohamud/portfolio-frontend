import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function ImageBox() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "solid black",
        borderStyle: "outset",
      }}
    >
      <img
        alt=""
        src="https://ih0.redbubble.net/image.523773899.2261/flat,550x550,075,f.u4.jpg"
      />
      <img
        alt=""
        src="https://miro.medium.com/max/375/1*qsMH3spHzOErEBvK0-fKWw@2x.jpeg"
      />
      <img
        alt=""
        src="https://www.thoughtco.com/thmb/JpBnEUWE4Szf34r-7z0pKoQUPCs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/2000px-Ruby-logo-R.svg-56a811b75f9b58b7d0f05e83.jpg"
      />
      <img alt="" src="https://avatars.githubusercontent.com/u/4223" />

      <img
        alt=""
        src="https://i2.wp.com/blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500"
      />
      <img alt="" src="https://i.ytimg.com/vi/xCGPPimXgJU/maxresdefault.jpg" />
      <img
        alt=""
        src="https://scriptverse.academy/img/tutorials/react-router.png"
      />
    </div>
  );
}
