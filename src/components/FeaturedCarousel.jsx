import { useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button } from "react-bootstrap";
import { GamesContext } from "../context/gamescontext";
import "../styles/FeaturedCarrusel.css";

const FeaturedCarousel = ({ title, filterType }) => {
  const { games } = useContext(GamesContext);
  /* 1. LÓGICA DEL FILTRO */
  const filteredGames = games.filter((game) => {
    if (filterType === "sale") return game.onSale && game.discount;
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
                <Link to={`/games/${game.code}`}>
                  <Card.Img
                    variant="top"
                    src={game.image}
                    alt={game.title}
                    className="featured-card-img-mobile"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="fw-bold text-truncate">
                    {game.title}
                  </Card.Title>
                  {/* 2. LÓGICA DE PRECIO VISUAL (Fácil de entender) */}
                  <Card.Text>
                    {game.discount ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          ${game.price}
                        </span>
                        <span className="text-success fw-bold">
                          ${game.discount}
                        </span>
                      </>
                    ) : (
                      <span className="fw-bold text-success">
                        ${game.price}
                      </span>
                    )}
                  </Card.Text>
                  <Link to={`/games/${game.code}`}>
                    <Button className="w-100 btn-custom" size="sm">
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
                  <Link to={`/games/${game.code}`}>
                    <Card.Img
                      variant="top"
                      src={game.image}
                      alt={game.title}
                      className="featured-card-img-desktop"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title
                      className="fw-bold text-truncate"
                      title={game.title}
                    >
                      {game.title}
                    </Card.Title>
                    {/* LÓGICA DE PRECIO (Versión escritorio) */}
                    <Card.Text>
                      {game.discount ? (
                        <>
                          <span className="text-decoration-line-through me-2">
                            ${game.price}
                          </span>
                          <span className="text-success fw-bold">
                            ${game.discount}
                          </span>
                        </>
                      ) : (
                        <span className="fw-bold text-success">
                          ${game.price}
                        </span>
                      )}
                    </Card.Text>
                    <Link to={`/games/${game.code}`}>
                      <Button className="w-100 btn-custom" size="sm">
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
