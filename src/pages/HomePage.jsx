import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeroCarousel from "../components/HeroCarrousel.jsx";
import { GamesContext } from "../context/gamescontext.jsx";
import GamesCatalog from "../components/GamesCatalog.jsx";

const HomePage = () => {
  const { games } = useContext(GamesContext);

  return (
    <>
      <Container className="text-center my-4">
        <h1 className="display-6 fw-bold">Juegos Destacados</h1>
      </Container>
      <HeroCarousel />
      <GamesCatalog games={games} />
    </>
  );
};

export default HomePage;
