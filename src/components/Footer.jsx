import { Container, Row, Col, Button, Nav, InputGroup, Form } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaDiscord, FaCcVisa, FaCcMastercard, FaPaypal, } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container mt-auto">
      <Container>
        <Row className="justify-content-between mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">Explorar</h6>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/code" className="footer-link p-0">
                Cambiar código
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="footer-link p-0">
                Contáctanos
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="footer-link p-0">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/support" className="footer-link p-0">
                Soporte
              </Nav.Link>
              <Nav.Link as={Link} to="/refunds" className="footer-link p-0">
                Reembolsos
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">Newsletter</h6>
            <p className="small text-secondary mb-3">
              Suscríbete para recibir ofertas exclusivas y novedades gaming.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Escribe tu correo electrónico"
                aria-label="Tu email"
                className="footer-input"
              />
              <Button variant="outline-light" className="footer-subscribe-btn">
                Suscribirse
              </Button>
            </InputGroup>
          </Col>

          <Col md={3} className="d-flex flex-column align-items-md-end gap-1">
            <h6 className="footer-title">Seguinos en</h6>
            <div className="d-flex gap-3 mb-4">
              <a href="/404" className="social-icon text-decoration-none">
                <FaFacebook />
              </a>
              <a href="/404" className="social-icon text-decoration-none">
                <FaTwitter />
              </a>
              <a href="/404" className="social-icon text-decoration-none">
                <FaLinkedin />
              </a>
              <a href="/404" className="social-icon text-decoration-none">
                <FaDiscord />
              </a>
            </div>

            <h6 className="footer-title">Medios de pago</h6>
            <div className="d-flex gap-3">
              <FaCcVisa className="payment-icon" />
              <FaCcMastercard className="payment-icon" />
              <FaPaypal className="payment-icon" />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col className="d-flex justify-content-center justify-content-md-start">
            <Button className="footer-download-btn d-flex align-items-center gap-2 rounded-pill">
              <i className="bi bi-download"></i>
              Descargue nuestra App
            </Button>
          </Col>
        </Row>

        <Row className="pt-3 border-top border-secondary border-opacity-25 align-items-center">
          <Col md={7} className="d-flex gap-3 flex-wrap mb-2 mb-md-0">
            <Link to="/policies" className="footer-link m-0">
              Políticas
            </Link>
            <Link to="/thanks" className="footer-link m-0">
              Agradecimientos
            </Link>
            <Link to="/cookies" className="footer-link m-0">
              Cookies
            </Link>
            <Link to="/about" className="footer-link m-0 fw-bold text-white">
              Sobre Nosotros
            </Link>
          </Col>
          <Col md={5} className="text-md-end">
            <p className="m-0 footer-copyright">
              2025 Ecommerce Gaming Rolling Code.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
