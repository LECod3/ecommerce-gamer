import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GamesContext } from "../context/gamescontext.jsx";
import { AuthContext } from "../context/authcontext.jsx";
import MediaInfoSection from "../components/MediaInfoSection";
import StarRating from "../components/StarRating.jsx";
import { FaStar } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import "../styles/GameDetail.css";

const GameDetailPage = () => {
  const { games, updateGame } = useContext(GamesContext);
  const { user } = useContext(AuthContext);
  const { code } = useParams();
  const game = games.find((g) => g.code === code);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!game) {
    return (
      <div className="container my-5">
        <h2>Juego no encontrado</h2>
        <p>El juego que estas buscando no lo vendemos.</p>
      </div>
    );
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor selecciona una calificación.");
      return;
    }

    const newReview = {
      user: user.email.split("@")[0],
      rating: rating,
      comment: comment,
    };
    const updatedGame = {
      ...game,
      reviews: [newReview, ...game.reviews],
    };

    updateGame(updatedGame);

    setRating(0);
    setComment("");
    alert("¡Gracias por tu reseña!");
  };

  return (
    <div className="container my-4">
      {game && <MediaInfoSection game={game} />}

      <div className="row mt-5">
        <div className="col-12 col-lg-8">
          <h3 className="fw-bold mb-3">Descripción del juego</h3>
          <p style={{ whiteSpace: "pre-line" }}>
            {game.longDescription || game.description}
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h3>Requisitos del sistema</h3>

          <div className="card p-3">
            <ul className="list-unstyled mb-0">
              <li>
                <strong>Sistema Operativo:</strong> {game.requirements.os}
              </li>
              <li>
                <strong>Procesador:</strong> {game.requirements.processor}
              </li>
              <li>
                <strong>Memoria RAM:</strong> {game.requirements.memory}
              </li>
              <li>
                <strong>Gráficos:</strong> {game.requirements.graphics}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h3 className="fw-bold mb-4">Reseñas de usuarios</h3>

          {user && user.role === "user" && (
            <div className="review-form-container">
              <h4 className="review-form-title">Dejanos tu reseña</h4>
              <p className="review-disclaimer">
                Tu comentario será evaluado por los administradores para
                asegurar que cumple con nuestras normas de comunidad.
              </p>
              <Form onSubmit={handleSubmitReview}>
                <div className="mb-3">
                  <div className="star-rating-input">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <FaStar
                          key={index}
                          color={
                            ratingValue <= (hoverRating || rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          onClick={() => setRating(ratingValue)}
                          onMouseEnter={() => setHoverRating(ratingValue)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      );
                    })}
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escribe tu opinión aquí..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="review-textarea"
                    required
                  />
                </Form.Group>
                <Button type="submit" className="btn-submit-review">
                  Enviar Reseña
                </Button>
              </Form>
            </div>
          )}

          {game.reviews.length > 0 ? (
            game.reviews.map((review, index) => (
              <div key={index} className="card mb-3 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{review.user}</strong>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 mb-0">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-white">Este juego todavia no tiene reseñas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
