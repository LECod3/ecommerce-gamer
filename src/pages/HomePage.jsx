import React, { useContext } from "react";
import HeroCarousel from "../components/HeroCarrousel.jsx";
import { GamesContext } from "../context/gamescontext.jsx";
import FeaturedCarousel from "../components/FeaturedCarousel.jsx";
import GamesCatalog from "../components/GamesCatalog.jsx";
import "../styles/HomePage.css";

const HomePage = () => {
  const { games } = useContext(GamesContext);

  return (
    <>
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">Recomendados</h1>
        </header>
        <HeroCarousel />
        {/* Juegos en promoción */}
        <FeaturedCarousel title="Ofertas destacadas" filterType="sale" />
        {/* Juegos nuevos */}
        <FeaturedCarousel title="Nuevos lanzamientos" filterType="new" />
        <GamesCatalog games={games} />
      </div>
    </>
  );
};

export default HomePage;
