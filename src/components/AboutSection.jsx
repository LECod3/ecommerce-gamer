import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/AboutUs.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="about-image-col">
            <div className="about-image-wrapper">
              <img
                src="/img/about.jpg"
                alt="About us"
                className="about-image"
              />
            </div>
          </Col>

          <Col md={6} className="about-content">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos un equipo apasionado por los videojuegos y la tecnología.
              Esperamos poder crear mejores proyectos que estos y nunca dejar de mejorar en la programación.
            </p>
            <Button className="neon-btn">Más Información</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;