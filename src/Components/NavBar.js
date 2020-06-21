import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../LOGO.png";
import icon from "../carticon.png";
import styled from "styled-components";
import { TouchableOpacity } from "react";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3">
        <Link to="/mainpage">
          <img
            src={logo}
            alt="logo"
            className="logo1"
            style={{ width: "5rem", height: "5rem" }}
          />
        </Link>

        <Link to="/ProductList" className="nav-link">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">Products</li>
          </ul>
        </Link>
        <Link to="/Contact" className="nav-link">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">Contact us</li>
          </ul>
        </Link>
        <Link to="/Login" className="nav-link">
          <ul className="navbar-nav alight-items-right">
            <li className="nav-item ml-5">Log in</li>
          </ul>
        </Link>
        <Link to="/Signup" className="nav-link">
          <ul className="navbar-nav align-items-right">
            <li className="nav-item ml-5">Sign Up</li>
          </ul>
        </Link>
        <Link to="/cart" className="ml-auto">
          <img src={icon} alt="carticon" className="carticon" />
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: White;
  .nav-link {
    color: var(--mainBlack);!important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .nav-right: {
    text-transform: capitalize;
    color: var(--mainBlack);!important;
    font-size: 1.2rem;

  }
`;
