import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import logo from "../assets/ecommerce-logo-cropped.webp";
import "../styles/Navbar.css";

const NavbarComponent = ({ onLoginClick, onRegisterClick }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      className="custom-navbar"
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0">
          <img src={logo} alt="Rolling Code Gaming Store Logo" height="40" />
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
            {user && user.role === "admin" && (
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={`Hola, ${user.email}`}
                id="basic-nav-dropdown"
              >
                {user.role === "admin" && (
                  <NavDropdown.Item as={Link} to="/admin">
                    Panel Admin
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link
                  onClick={onLoginClick}
                  className="btn btn-auth px-3 mb-2 mb-lg-0 me-lg-2"
                >
                  Iniciar Sesión
                </Nav.Link>
                <Nav.Link
                  onClick={onRegisterClick}
                  className="btn btn-auth px-3"
                >
                  Registrarse
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
