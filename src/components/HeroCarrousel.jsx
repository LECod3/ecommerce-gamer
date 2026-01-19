import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/HeroCarrousel.css";

const HeroCarrousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="hero-carousel-item">
        <div className="hero-overlay"></div>
        <img
          className="d-block w-100 hero-image"
          src="/images/R-evil-4-remake.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2> Resident Evil 4 Remake </h2>
          <p>
            Un clásico renacido con gráficos impresionantes y jugabilidad
            moderna. ¡No te pierdas esta obra maestra del terror!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HeroCarrousel;
