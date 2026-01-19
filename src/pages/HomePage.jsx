import React from "react";
import { Container } from "react-bootstrap";
import HeroCarousel from "../components/HeroCarrousel.jsx";
import FeaturedCarousel from "../components/FeaturedCarousel.jsx";
// import { useContext } from "react";
// import { GamesContext } from "../context/gamescontext.jsx";
import GamesCatalog from "../components/GamesCatalog.jsx";

const HomePage = () => {
  // const { games } = useContext(GamesContext);
  const games = []; // Mock temporal hasta que el contexto exista
  return (
    <>
      <Container className="text-center my-4">
        <h1 className="display-6 fw-bold">Juegos Destacados</h1>
      </Container>
      <HeroCarousel />
      <FeaturedCarousel games={games} />
      <GamesCatalog games={games} />
    </>
  );
};

export default HomePage;
