import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GamesContext } from "../context/gamescontext.jsx";
import MediaInfoSection from "../components/MediaInfoSection";
import StarRating from "../components/StarRating.jsx";

const GameDetailPage = () => {
  const { games } = useContext(GamesContext);
  const { code } = useParams();
  const game = games.find((g) => g.code === code);
  
  if (!game) {
    return (
      <div className="container my-5">
        <h2>Juego no encontrado</h2>
        <p>El juego que estas buscando no lo vendemos.</p>
      </div>
    );
  };

  return (
    <div className="container my-4">
      <h1>Detalle del Juego</h1>
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