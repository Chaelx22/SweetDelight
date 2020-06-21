import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, image } from "react-bootstrap";
import logo from "../LOGO.png";

export default class mainpage extends Component {
  render() {
    return (
      <Row>
        <img
          src={logo}
          className="center"
          style={{ width: "26rem", height: "25rem" }}
          alt="logo"
        />
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-4"
        >
          <h1 className="col-10 mx-auto text-center col-lg-auto  ">
            Welcome to Sweet Delight
          </h1>
          <h2>Sweetness in every Bite</h2>
        </div>
      </Row>
    );
  }
}
