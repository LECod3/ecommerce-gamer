import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = ({ onLoginClick, onRegisterClick }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Gamer Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onLoginClick} className="btn btn-auth px-3 me-2">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link onClick={onRegisterClick} className="btn btn-auth px-3">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
