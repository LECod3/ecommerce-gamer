import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button } from "react-bootstrap";
import { GamesContext } from "../context/gamescontext";

const FeaturedCarousel = ({ title, filterType }) => {
  const { games } = useContext(GamesContext);
  const filteredGames = games.filter((game) => {
    if (filterType === "sale") return game.onSale;
    if (filterType === "new") return game.isNew;
    return false;
  });

  if (filteredGames.length === 0) return null;

  return (
    <div className="my-5">
      {/* Título del carrusel */}
      <h3 className="mb-3">{title}</h3>

      <Carousel indicators={false}>
        {filteredGames.map((game) => (
          <Carousel.Item key={game.id}>
            <div className="d-flex justify-content-center">
              <Card className="border-0 shadow-sm" style={{ width: "18rem" }}>
                <Link to={`/game/${game.code}`}>
                  <Card.Img
                    variant="top"
                    src={game.image}
                    alt={game.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <Card.Body>
                  <Card.Title className="fw-bold">
                    {game.title}
                  </Card.Title>

                  {/* Precio */}
                  <Card.Text className="fw-bold text-success">
                    ${game.price}
                  </Card.Text>

                  {/* Botón */}
                  <Link to={`/game/${game.code}`}>
                    <Button variant="primary" size="sm">
                      Ver juego
                    </Button>
                  </Link>
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
