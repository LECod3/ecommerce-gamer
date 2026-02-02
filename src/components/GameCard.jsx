import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={game.image}
        alt={game.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{game.title}</Card.Title>
        <Card.Text className="text-white small">
          {game.description?.substring(0, 100)}...
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-success fw-bold">${game.price}</h5>
          <Button
            as={Link}
            to={`/game/${game.id}`}
            variant="outline-primary"
            size="sm"
          >
            Ver detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
