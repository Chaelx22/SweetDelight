import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { render } from "@testing-library/react";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>UserName*</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup address="address" bsSize="large">
          <FormLabel>Address*</FormLabel>
          <FormControl></FormControl>
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password*</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="Confirmpassword" bsSize="large">
          <FormLabel>Confirm Password*</FormLabel>
          <FormControl
            value={Cpassword}
            onChange={e => setCPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Link to="/Login" className="ml-auto">
          <Button block bsSize="large" type="submit">
            Sign up
          </Button>
        </Link>
      </form>
    </div>
  );
}
