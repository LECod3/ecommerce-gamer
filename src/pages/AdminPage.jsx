import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Badge,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { GamesContext } from "../context/gamescontext";
import Pagination from "../components/Pagination.jsx";

const AdminPage = () => {
  const { games, deleteGame, updateGame } = useContext(GamesContext);
  const stockStatus = (stock) => {
    if (stock === 0) return { variant: "danger", text: "Sin Stock" };
    if (stock < 30) return { variant: "warning", text: "Bajo Stock" };
    return { variant: "success", text: "Stock Disponible" };
  };

  const getStockType = (stock) => {
    if (stock === 0) return "outOfStock";
    if (stock < 30) return "lowStock";
    return "abundantStock";
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [stockFilter, setStockFilter] = useState("all");

  const totalGames = games.length;
  const inStock = games.filter((g) => g.stock >= 30).length;
  const gamesLowStock = games.filter((g) => g.stock > 0 && g.stock < 30).length;
  const outOfStock = games.filter((g) => g.stock === 0).length;

  const filteredByStock = games.filter((game) => {
    if (stockFilter === "all") return true;
    return getStockType(game.stock) === stockFilter;
  });

  const totalPages = Math.ceil(filteredByStock.length / pageSize);
  const paginatedGames = filteredByStock.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {setCurrentPage(1)}, [stockFilter]);

  const openEditModal = (game) => {
    setSelectedGame({...game});
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    updateGame({
      ...selectedGame, 
      price: Number(selectedGame.price), 
      stock: Number(selectedGame.stock)
    });
    setShowModal(false);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-2 text-white fw-bold text-center">Inventario de Juegos</h2>
      <p className="text-white text-center"> Visualiza y administra los juegos de la tienda con los botones de editar y eliminar</p>
      {/* resumen rapido */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="small">Total de juegos</Card.Title>
              <h2 className="fw-bold">{totalGames}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="text-success small">En Stock</Card.Title>
              <h2 className="fw-bold text-success">{inStock}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="dark" text="white" className="mb-3 border-secondary">
            <Card.Body>
              <Card.Title className="text-warning small">Bajo Stock</Card.Title>
              <h2 className="fw-bold text-warning">{gamesLowStock}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
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
              {paginatedGames.map((game) => {
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
                      <Button variant="link" className="text-primary p-0 me-2" onClick={() => openEditModal(game)}>
                        <i className="bi bi-pencil-square"></i> 
                      </Button>
                      <Button variant="link" className="text-danger p-0" onClick={() => {
                          if (confirm(`¿Eliminar "${game.title}"?`)) {
                            deleteGame(game.id);
                          }
                        }}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button 
              variant={stockFilter === "all" ? "primary" : "outline-primary"}
              size="sm"
              onClick={() => setStockFilter("all")}
            >
              Todos
            </Button>

            <Button
              variant={stockFilter === "abundantStock" ? "success" : "outline-success"}
              size="sm"
              onClick={() => setStockFilter("abundantStock")}
            >
              Abundante Stock
            </Button>

            <Button
              variant={stockFilter === "lowStock" ? "warning" : "outline-warning"}
              size="sm"
              onClick={() => setStockFilter("lowStock")}
            >
              Poco stock
            </Button>

            <Button
              variant={stockFilter === "outOfStock" ? "danger" : "outline-danger"}
              size="sm"
              onClick={() => setStockFilter("outOfStock")}
            >
              Sin stock
            </Button>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Juego</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedGame && (
            <Form>
              <Form.Group className="mb-3"> {/* controlId="formGameTitle"*/}
                <Form.Label>Título</Form.Label>
                <Form.Control
                  value={selectedGame.title}
                  onChange={(e) => setSelectedGame({...selectedGame, title: e.target.value,})}/>
              </Form.Group>

              <Form.Group className="mb-3"> 
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                  type="number"
                  value={selectedGame.price}
                  onChange={(e) =>
                    setSelectedGame({...selectedGame, price: e.target.value,})}/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control 
                  type="number"
                  value={selectedGame.stock}
                  onChange={(e) =>
                    setSelectedGame({...selectedGame, stock: e.target.value,})}/>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
