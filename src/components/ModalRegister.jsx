import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalRegister = ({ show, handleClose, handleSwitchToLogin }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">REGISTRARSE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Nombre de usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <div
            className="text-muted mb-3 text-center"
            style={{ fontSize: "0.8rem" }}
          >
            Al registrarse, confirma que tiene 16 años o más y acepta nuestro{" "}
            <a href="#" className="text-decoration-none">
              Acuerdo de Usuario
            </a>{" "}
            y{" "}
            <a href="#" className="text-decoration-none">
              Política de Privacidad
            </a>
            .
          </div>

          <Button
            variant="success"
            type="submit"
            className="w-100 mb-3 text-uppercase fw-bold"
          >
            Registrarse Ahora
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
      <Modal.Footer className="border-0 justify-content-center">
        <div className="text-muted">
          ¿Ya tienes una cuenta?{" "}
          <Button
            variant="link"
            className="text-decoration-none p-0"
            onClick={handleSwitchToLogin}
          >
            Inicia sesión en tu cuenta
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegister;
