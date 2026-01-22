import React, { useContext } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { GamesContext } from "../context/gamescontext";
//import GameCard from "./GameCard";

const FeaturedCarousel = ({ title, filterType }) => {
    const { games } = useContext(GamesContext);
    const filteredGames = games.filter((game) => {
    if (filterType === "sale") return game.onSale;
    if (filterType === "new") return game.isNew;
        return false;
         });
        
         if (filteredGames.length === 0) return null;

    return (
        <div className="container my-5">
            <h3 className="mb-4">{title}</h3>

            <Carousel indicators={false}>
                {filteredGames.map((game) => (
                    <Carousel.Item key={game.id}>
                        <div className="d-flex justify-content-center">
                            <Card
                                className="border-0 shadow-sm"
                                style={{ width: "18rem" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={game.image}
                                    alt={game.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                    />

                                    <Card.Body>
                                    <Card.Title className="fw-bold">
                                        {game.title}
                                    </Card.Title>

                                    {/* Precio */}
                                    <Card.Text className="fw-bold text-success">
                                        ${game.price}
                                    </Card.Text>

                                    {/* Botón de acción */}
                                    <Button variant="primary" size="sm">
                                        Ver juego
                                    </Button>
                                    </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedCarousel;