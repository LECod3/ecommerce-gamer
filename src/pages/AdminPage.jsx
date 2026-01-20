import React from "react";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Panel de Administración</h1>
      <p className="text-center text-muted">
        Bienvenido al área restringida. Aquí podrás gestionar los juegos.
      </p>
      {/* definir diseño de la admin page*/}
    </Container>
  );
};

export default AdminPage;
