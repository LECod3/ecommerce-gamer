import { Container, Row, Col } from "react-bootstrap";
import TeamCard from "./TeamCard";
import "../styles/AboutSection.css";
import Alexis from "../assets/alexis.webp";

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
              img={Alexis}
              text="Desarrollador"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
