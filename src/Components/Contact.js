import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import logo from "../LOGO.png";
import Fb from "../facebook.png";
import insta from "../insta.png";
import Twitt from "../twitt.png";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"></div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          Contact US
        </div>

        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          ....................
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          throught here
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          09234234921
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          ....................
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          <img
            src={Fb}
            className="center"
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
          <text>@SweetDelight.Ph</text>
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          ....................
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          <img
            src={insta}
            className="center"
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
          <text>@SweetDelight.Ph</text>
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          ....................
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-5"
        >
          <img
            src={Twitt}
            className="center"
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
          <text>@SweetDelight.Ph</text>
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          ....................
        </div>
        <div
          className="col-10 mx-auto text-center text-title
          text-uppercase pt-2"
        >
          <img
            src={logo}
            className="center"
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
export default Contact;
