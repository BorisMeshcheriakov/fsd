import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { NavLink } from "react-router-dom";

import { Profile } from "features/profile";

type Props = {};

export const Header = (props: Props) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          <Nav.Item>
            <NavLink to="/" className="d-flex align-items-center p-2">
              <Navbar.Text>Home</Navbar.Text>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profile" className="d-flex align-items-center p-2">
              <Navbar.Text>Profile</Navbar.Text>
            </NavLink>
          </Nav.Item>
        </Nav>

        <Profile />
      </Container>
    </Navbar>
  );
};
