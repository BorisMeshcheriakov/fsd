import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { NavLink } from "react-router-dom";

import { Avatar } from "../../entities/user";
import { useAuthModal } from "features/auth";

type Props = {};

export const Header = (props: Props) => {
  const { toggle } = useAuthModal();
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="d-flex align-items-center">
              <Navbar.Text>Home</Navbar.Text>
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink to="/test">
                <NavDropdown.ItemText>Action</NavDropdown.ItemText>
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Avatar onClick={toggle} />
      </Container>
    </Navbar>
  );
};
