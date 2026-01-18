import React from "react";
import HeroCarousel from "../components/HeroCarrousel.jsx";
import FeaturedCarousel from "../components/FeaturedCarousel.jsx";
import { useContext } from "react";
import { GamesContext } from "../context/gamescontext.jsx";
import GamesCatalog from "../components/GamesCatalog.jsx";
import { NavbarComponent } from "../components/Navbar.jsx";

const HomePage = () => {
    const { games } = useContext(GamesContext);
    return (
        <>
            <NavbarComponent />
            <h1>HomePage</h1>
            <HeroCarousel />
            <FeaturedCarousel games={games} />
            <GamesCatalog games={games} />
        </>
    );
};

export default HomePage;
