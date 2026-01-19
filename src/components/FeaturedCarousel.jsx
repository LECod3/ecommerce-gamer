import React from "react";
import { Carousel } from "react-bootstrap";
//import GameCard from "./GameCard";

const FeaturedCarousel = ({ games }) => {
    return (
        <div className="container my-5">
            <h3 className="mb-4">Featured Games</h3>

            <Carousel indicators={false}>
                {games.map((game) => (
                    <Carousel.Item key={game.id}>
                        <div className="d-flex justify-content-center">
                            <GameCard game={game} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedCarousel;