import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeroCarousel from "../components/HeroCarrousel.jsx";
import { GamesContext } from "../context/gamescontext.jsx";
import FeaturedCarousel from "../components/FeaturedCarousel.jsx";
import GamesCatalog from "../components/GamesCatalog.jsx";

const HomePage = () => {
  const { games } = useContext(GamesContext);

  return (
    <>
      <Container className="text-center mt-4 mb-2">
        <h1 className="display-6 fw-bold">Juegos Destacados</h1>
      </Container>
      <HeroCarousel />
      {/* Juegos en promoción */}
      <FeaturedCarousel title="Ofertas destacadas" filterType="sale" />
      {/* Juegos nuevos */}
      <FeaturedCarousel title="Nuevos lanzamientos" filterType="new" />
      <GamesCatalog games={games} />
    </>
  );
};

export default HomePage;
