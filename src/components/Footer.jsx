import { Container, Row, Col, Button, Nav, InputGroup, Form } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaDiscord, FaCcVisa, FaCcMastercard, FaPaypal, } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 mt-auto border-top border-secondary">
      <Container>
        <Row className="justify-content-between mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-2 text-secondary">
              Explorar
            </h6>
            <Nav className="flex-column gap-2">
              <Nav.Link
                as={Link}
                to="/code"
                className="text-light p-0 text-decoration-none hover-underline"
              >
                Cambiar código
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="text-light p-0 text-decoration-none hover-underline"
              >
                Contáctanos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className="text-light p-0 text-decoration-none hover-underline"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/support"
                className="text-light p-0 text-decoration-none hover-underline"
              >
                Soporte
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/refunds"
                className="text-light p-0 text-decoration-none hover-underline"
              >
                Reembolsos
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-1 text-secondary">
              Newsletter
            </h6>
            <p className="small text-light mb-2">
              Suscríbete para recibir ofertas exclusivas y novedades gaming.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Escribe tu correo electrónico"
                aria-label="Tu email"
                className="text-light border-secondary focus-ring-violet"
              />
              <Button variant="outline-light">Suscribirse</Button>
            </InputGroup>
          </Col>

          <Col md={3} className="d-flex flex-column align-items-md-end gap-1">
            <h6 className="text-uppercase fw-bold mb-0 text-secondary">
              Redes Sociales
            </h6>
            <div className="d-flex gap-3">
              <a
                href="/404"
                className="text-secondary fs-5 hover-text-white transition lh-1 text-decoration-none"
              >
                <FaFacebook />
              </a>
              <a
                href="/404"
                className="text-secondary fs-5 hover-text-white transition lh-1 text-decoration-none"
              >
                <FaTwitter />
              </a>
              <a
                href="/404"
                className="text-secondary fs-5 hover-text-white transition lh-1 text-decoration-none"
              >
                <FaLinkedin />
              </a>
              <a
                href="/404"
                className="text-secondary fs-5 hover-text-white transition lh-1 text-decoration-none"
              >
                <FaDiscord />
              </a>
            </div>

            <h6 className="text-uppercase fw-bold mb-0 text-secondary">
              Medios de pago aceptados
            </h6>
            <div className="d-flex gap-3 text-secondary opacity-75">
              <FaCcVisa className="fs-2" />
              <FaCcMastercard className="fs-2" />
              <FaPaypal className="fs-2" />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col className="d-flex justify-content-md">
            <Button
              variant="custom"
              className="text-white px-4 py-2 d-flex align-items-center gap-2 shadow-sm footer-download-btn"
            >
              <i className="bi bi-download"></i>
              Descargue nuestra aplicación de escritorio
            </Button>
          </Col>
        </Row>

        <Row className="pt-3 border-top border-secondary text-secondary small">
          <Col md={7} className="d-flex gap-3 flex-wrap mb-2 mb-md-0">
            <Link
              to="/policies"
              className="text-secondary text-decoration-none hover-text-white"
            >
              Políticas
            </Link>
            <Link
              to="/thanks"
              className="text-secondary text-decoration-none hover-text-white"
            >
              Agradecimientos
            </Link>
            <Link
              to="/cookies"
              className="text-secondary text-decoration-none hover-text-white"
            >
              Cookies
            </Link>
            <Link
              to="/about"
              className="text-light text-decoration-none fw-bold hover-text-white"
            >
              Sobre Nosotros
            </Link>
          </Col>
          <Col md={5} className="text-md-end">
            <p className="m-0 text-muted footer-copyright">
              © 2024 Gamer Store. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
