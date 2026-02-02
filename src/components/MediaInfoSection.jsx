import { useEffect, useState } from "react";
import StarRating from "./StarRating.jsx";

const MediaInfoSection = ({ game }) => {
  const [activeImage, setActiveImage] = useState(game.image);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!game.gallery || game.gallery.length === 0) return;

      setActiveImage(index === -1 ? game.image : game.gallery[index]);

      index++;

      if (index >= game.gallery.length) {
        index = -1;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [game]);

  if (!game) return null;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <img
            src={activeImage}
            alt={game.title}
            className="img-fluid w-100 rounded"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />

          <div className="d-flex gap-2 mt-2">
            <img
              src={game.image}
              alt="main"
              className="rounded"
              style={{
                width: "80px",
                height: "50px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setActiveImage(game.image)}
            />

            {game.gallery?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                className="rounded"
                style={{
                  vwidth: "80px",
                  height: "50px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <h2 className="fw-bold">{game.title}</h2>
          <p className="text-white mb-1">{game.developer}</p>

          <div className="d-flex align-items-center gap-2 mb-2">
            <StarRating rating={game.rating} />
            <small className="text-white">({game.ratingsCount} ratings)</small>
          </div>

          <h4 className="fw-bold mt-3">${game.price}</h4>
          <p className={game.stock > 0 ? "text-success" : "text-danger"}>
            {game.stock > 0 ? "En stock" : "Sin stock"}
          </p>

          <button
            className="btn btn-primary w-100 mt-2"
            disabled={game.stock === 0}
          >
            Comprar
          </button>
          <hr />

          <ul className="list-unstyled small">
            <li>
              <strong>Categoría:</strong>{" "}
              {Array.isArray(game.category)
                ? game.category.join(" / ")
                : game.category}
            </li>
            <li>
              <strong>Plataforma:</strong> {game.platform}{" "}
            </li>
            <li>
              <strong>Modo:</strong> {game.mode}
            </li>
            <li>
              <strong>Idiomas:</strong> {game.languages}
            </li>
            <li>
              <strong>Fecha de lanzamiento:</strong> {game.releaseDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaInfoSection;
