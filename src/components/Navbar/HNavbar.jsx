import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./navbar.css";
import { useState, useEffect } from "react";
import UserLogin from "../Modal/UserLogin";
function HNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("token") === "user" ||
      localStorage.getItem("token") === "admin"
    )
      setLoggedIn(true);
  }, []);
  function ModalPopup(e) {
    e.preventDefault();
    handleShow();
  }
  function ClearLog() {
    localStorage.clear();
    window.location.reload();
  }
  function NavigatetoSignup() {
    window.location.href = "/register";
  }
  return (
    <div>
      <Navbar className="nav" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" id="navitem" style={{ fontSize: "1.5rem" }}>
            Hostel Book
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ backgroundColor: "white" }}
          >
            <Nav className="mx-auto">
              <Nav.Link id="navitem" href="/">
                Home
              </Nav.Link>
              <Nav.Link id="navitem" href="/rooms">
                Rooms
              </Nav.Link>
              <Nav.Link id="navitem" href="/contactus">
                Contact us
              </Nav.Link>
              <Nav.Link id="navitem" href="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="navbuttons">
                {
                loggedIn ? 
                (
                  <Button variant="outline-primary" onClick={ClearLog}>
                    Logout
                  </Button>
                ) : (
                  <Button variant="outline-primary" onClick={ModalPopup}>
                    Login
                  </Button>
                )}
              </Nav.Link>
              <Nav.Link id="navbuttons" href="#deets">
                <Button variant="outline-primary" onClick={NavigatetoSignup}>
                  SignUp
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional Rendering */}
      {show ? <UserLogin handler={handleClose} /> : null}
    </div>
  );
}

export default HNavbar;
