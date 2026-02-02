import { useContext } from "react";
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

  const createSlides = (games, size) => {
    const slides = [];
    for (let i = 0; i < games.length; i += size) {
      slides.push(games.slice(i, i + size));
    }
    return slides;
  };

  const gameSlides = createSlides(filteredGames, 4);

  return (
    <div className="my-5 container">
      <h3 className="mb-3">{title}</h3>

      <Carousel indicators={false} className="d-block d-md-none">
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
                  <Card.Title className="fw-bold text-truncate">
                    {game.title}
                  </Card.Title>
                  <Card.Text className="fw-bold text-success">
                    ${game.price}
                  </Card.Text>
                  <Link to={`/game/${game.code}`}>
                    <Button variant="primary" size="sm" className="w-100">
                      Ver juego
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel indicators={false} className="d-none d-md-block">
        {gameSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center gap-4">
              {slide.map((game) => (
                <Card
                  key={game.id}
                  className="border-0 shadow-sm"
                  style={{ width: "16rem" }}
                >
                  <Link to={`/game/${game.code}`}>
                    <Card.Img
                      variant="top"
                      src={game.image}
                      alt={game.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title
                      className="fw-bold text-truncate"
                      title={game.title}
                    >
                      {game.title}
                    </Card.Title>
                    <Card.Text className="fw-bold text-success">
                      ${game.price}
                    </Card.Text>
                    <Link to={`/game/${game.code}`}>
                      <Button variant="primary" size="sm" className="w-100">
                        Ver juego
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
