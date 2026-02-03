import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/NotFound.css";
import NotFoundImage from "../assets/notfoundimage.webp";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <img src={NotFoundImage} alt="Página no encontrada" className="notfound-image" />
        <div className="notfound-footer">
          <Button variant="outline-lighty" size="sm" onClick={() => navigate(-1)}>
            ← Volver atrás
          </Button>

          <Button variant="home-btn" size="sm" onClick={() => navigate("/")}>
            Ir al inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
