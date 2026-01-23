import React, { useContext } from "react";
import {
  Container,
  Table,
  Button,
  Badge,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { GamesContext } from "../context/gamescontext";

const AdminPage = () => {
  const { games } = useContext(GamesContext);
  const stockStatus = (stock) => {
    if (stock === 0) return { variant: "danger", text: "Sin Stock" };
    if (stock < 10) return { variant: "warning", text: "Bajo Stock" };
    return { variant: "success", text: "Stock Disponible" };
  };

  const totalGames = games.length;
  const inStock = games.filter(
    (gameFilteredByStock) => gameFilteredByStock.stock > 0,
  ).length;
  const outOfStock = totalGames - inStock;

  return (
    <Container className="my-5">
      <h2 className="mb-2 text-white">Inventario de Juegos</h2>
      <p className="text-white">Administra los juegos de la tienda</p>
      {/* resumen rapido */}
      <Row className="mb-4">
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="small">Total de juegos</Card.Title>
              <h2 className="fw-bold">{totalGames}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="text-success small">En Stock</Card.Title>
              <h2 className="fw-bold text-success">{inStock}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="text-danger small">Sin Stock</Card.Title>
              <h2 className="fw-bold text-danger">{outOfStock}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* tabla gestion */}
      <Card bg="dark" text="white" className="border-secondary">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Listado de Juegos</h4>
            <Button variant="primary" size="sm">
              Añadir nuevo juego
            </Button>
          </div>

          <Table hover variant="dark" responsive className="align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Stock</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* mapeo de juegos */}
              {games.map((game) => {
                const status = stockStatus(game.stock);
                return (
                  <tr key={game.id}>
                    <td className="text-secondary">#{game.id}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={game.image}
                          alt={game.title}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            marginRight: "10px",
                          }}
                        />
                        {game.title}
                      </div>
                    </td>
                    <td>${game.price}</td>
                    <td>
                      <Badge bg={status.variant} pill>
                        {status.text} ({game.stock})
                      </Badge>
                    </td>
                    <td className="text-end">
                      <Button variant="link" className="text-primary p-0 me-2">
                        <i className="bi bi-pencil-square"></i> Editar
                      </Button>
                      <Button variant="link" className="text-danger p-0">
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminPage;
