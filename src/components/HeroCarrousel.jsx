import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/HeroCarrousel.css";
import { GamesContext } from "../context/gamescontext";

const HeroCarrousel = () => {
  const { games } = useContext(GamesContext);

  return (
    <Carousel>
      {games.map((game) => (
        <Carousel.Item key={game.id} className="hero-carousel-item">
          <div className="hero-overlay"></div>
          <img
            className="d-block w-100 hero-image"
            src={game.image}
            alt={game.title}
          />
          <Carousel.Caption>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default HeroCarrousel;
