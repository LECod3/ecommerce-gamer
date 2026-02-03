import { Container, Row, Col } from "react-bootstrap";
import TeamCard from "./TeamCard";
import "../styles/AboutSection.css";

const TeamSection = () => {
  return (
    <section className="team-section" id="team">
      <Container>
        <h2 className="text-center mb-5">Conoce a nuestro equipo</h2>

        <Row className="justify-content-center g-5">
          <Col md={4} sm={6}>
            <TeamCard
              name="Luciano Caro"
              img="https://i.postimg.cc/0Ntzz3Zf/me.webp"
              text="Desarrollador"
            />
          </Col>

          <Col md={4} sm={6}>
            <TeamCard
              name="Alexis Arreyes"
              img="/img/team2.jpg"
              text="Desarrollador"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
