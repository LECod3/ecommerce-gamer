import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../context/authcontext";
import "../styles/Login.css";

const ModalLogin = ({ show, handleClose, handleSwitchToRegister }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="modal-login">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">INICIAR SESIÓN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100 mb-3 text-uppercase fw-bold"
          >
            Iniciar Sesión
          </Button>

          <div className="text-center mb-3">
            <small className="text-secondary">O continuar con</small>
          </div>

          <div className="d-flex justify-content-center gap-2 mb-3">
            <Button variant="outline-secondary" className="flex-grow-1">
              Google
            </Button>
            <Button variant="outline-primary" className="flex-grow-1">
              Facebook
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center flex-column">
        <Button variant="link" className="text-decoration-none text-secondary">
          ¿Olvidaste tu contraseña?
        </Button>
        <div className="text-muted">
          ¿No tienes cuenta?{" "}
          <Button
            variant="link"
            className="text-decoration-none p-0"
            onClick={handleSwitchToRegister}
          >
            Regístrate aquí
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;
