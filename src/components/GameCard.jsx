import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/GameCard.css";

const GameCard = ({ game }) => {
  const { price, onSale, discount } = game;

  const finalPrice = onSale ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={game.image}
        alt={game.title}
        className="game-card-img"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{game.title}</Card.Title>
        <Card.Text className="text-white small">
          {game.description?.substring(0, 100)}...
        </Card.Text>
        <div className="price-container">
          {onSale && (
            <span className="discount-badge">
              -{discount}%
            </span>
          )}
          <div className="price-values">
            {onSale && (
              <span className="old-price">
                ${price.toFixed(2)}
              </span>
            )}
            <span className="final-price">
              ${finalPrice}
            </span>
          </div>
        </div>

          <Button
            as={Link}
            to={`/games/${game.id}`}
            className="btn-custom"
            size="sm"
          >
            Ver detalles
          </Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
