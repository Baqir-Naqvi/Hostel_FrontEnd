import React from "react";

import { Form, Button } from "react-bootstrap";
import "./register.css";
function Register() {
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "5%" }}>Create Account</h2>
      <div className="parent">
        <div className="child">
          <Form style={{ textAlign: "center" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                style={{ width: "50%", marginLeft: "25%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "50%", marginLeft: "25%" }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "50%", marginLeft: "25%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Register;
