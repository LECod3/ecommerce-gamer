import React, { useContext, useState } from "react";
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
import "../styles/AdminPage.css";

const AdminPage = () => {
  const { games, deleteGame, updateGame, addGame } = useContext(GamesContext);

  const availableGameCategories = Array.from(
    new Set(games.flatMap((game) => game.category)),
  ).sort();

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

  const [errors, setErrors] = useState({});
  const [isNewGame, setIsNewGame] = useState(false);
  const [originalGame, setOriginalGame] = useState(null);

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
    currentPage * pageSize,
  );

  const handleStockFilterChange = (filter) => {
    setStockFilter(filter);
    setCurrentPage(1);
  };

  const openEditModal = (game) => {
    setSelectedGame({ ...game });
    setOriginalGame({ ...game });
    setIsNewGame(false);
    setErrors({});
    setShowModal(true);
  };

  const openAddModal = () => {
    const emptyGame = {
      title: "",
      price: "",
      stock: "",
      image: "",
      category: "",
      developer: "",
      description: "",
      rating: "",
      platform: "",
    };

    setSelectedGame(emptyGame);
    setOriginalGame(emptyGame);
    setIsNewGame(true);
    setErrors({});
    setShowModal(true);
  };

  const validateGame = () => {
    const newErrors = {};

    if (!selectedGame.title.trim()) newErrors.title = "Título requerido";
    if (selectedGame.price === "" || selectedGame.price < 0)
      newErrors.price = "Precio inválido";
    if (selectedGame.stock === "" || selectedGame.stock < 0)
      newErrors.stock = "Stock inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const hasChanges =
    JSON.stringify(selectedGame) !== JSON.stringify(originalGame);

  const handleSaveChanges = () => {
    if (!validateGame()) return;

    if (!isNewGame) {
      updateGame({
        ...selectedGame,
        price: Number(selectedGame.price),
        stock: Number(selectedGame.stock),
      });
    } else {
      addGame({
        ...selectedGame,
        price: Number(selectedGame.price),
        stock: Number(selectedGame.stock),
      });
    }
    setShowModal(false);
  };

  return (
    <Container className="admin-container my-5">
      <h2 className="admin-title text-center">Inventario de Juegos</h2>
      <p className="admin-subtitle text-center">
        Visualiza y administra los juegos de la tienda con los botones de editar
        y eliminar
      </p>
      {/* resumen visual para usuario admin */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="admin-stat-card mb-3 text-white">
            <Card.Body>
              <Card.Title className="admin-stat-title">
                Juegos totales
              </Card.Title>
              <h2 className="fw-bold m-0">{totalGames}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="admin-stat-card mb-3 text-white">
            <Card.Body>
              <Card.Title className="admin-stat-title text-success">
                Disponibles
              </Card.Title>
              <h2 className="fw-bold text-success m-0">{inStock}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="admin-stat-card mb-3 text-white">
            <Card.Body>
              <Card.Title className="admin-stat-title text-warning">
                Bajo Stock
              </Card.Title>
              <h2 className="fw-bold text-warning m-0">{gamesLowStock}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="admin-stat-card mb-3 text-white">
            <Card.Body>
              <Card.Title className="admin-stat-title text-danger">
                Agotados
              </Card.Title>
              <h2 className="fw-bold text-danger m-0">{outOfStock}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* tabla gestion de juegos */}
      <Card className="admin-table-container text-white">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Listado de Juegos</h4>
            <Button
              variant="primary"
              size="sm"
              onClick={openAddModal}
              className="btn-add-game"
            >
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
                          className="game-img-thumb"
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
                      <Button
                        variant="link"
                        className="btn-action text-primary p-0 me-3"
                        onClick={() => openEditModal(game)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="link"
                        className="btn-action text-danger p-0"
                        onClick={() => {
                          if (confirm(`¿Eliminar "${game.title}"?`)) {
                            deleteGame(game.id);
                          }
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="admin-filter-group">
            <button
              className={`admin-filter-btn btn-filter-all ${stockFilter === "all" ? "active" : ""}`}
              onClick={() => handleStockFilterChange("all")}
            >
              Todos
            </button>

            <button
              className={`admin-filter-btn btn-filter-abundant ${stockFilter === "abundantStock" ? "active" : ""}`}
              onClick={() => handleStockFilterChange("abundantStock")}
            >
              Abundante Stock
            </button>

            <button
              className={`admin-filter-btn btn-filter-low ${stockFilter === "lowStock" ? "active" : ""}`}
              onClick={() => handleStockFilterChange("lowStock")}
            >
              Poco stock
            </button>

            <button
              className={`admin-filter-btn btn-filter-out ${stockFilter === "outOfStock" ? "active" : ""}`}
              onClick={() => handleStockFilterChange("outOfStock")}
            >
              Sin stock
            </button>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="modal-admin"
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Juego</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedGame && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  value={selectedGame.title}
                  onChange={(e) =>
                    setSelectedGame({ ...selectedGame, title: e.target.value })
                  }
                />
                {errors.title && (
                  <small className="text-danger">{errors.title}</small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>URL de la Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={selectedGame.image}
                  onChange={(e) =>
                    setSelectedGame({ ...selectedGame, image: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedGame.price}
                  onChange={(e) =>
                    setSelectedGame({ ...selectedGame, price: e.target.value })
                  }
                />
                {errors.price && (
                  <small className="text-danger">{errors.price}</small>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedGame.stock}
                  onChange={(e) =>
                    setSelectedGame({ ...selectedGame, stock: e.target.value })
                  }
                />
                {errors.stock && (
                  <small className="text-danger">{errors.stock}</small>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Desarrollador</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedGame.developer || ""}
                  onChange={(e) =>
                    setSelectedGame({
                      ...selectedGame,
                      developer: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Select
                  value={
                    Array.isArray(selectedGame.category)
                      ? selectedGame.category[0]
                      : selectedGame.category
                  }
                  onChange={(e) =>
                    setSelectedGame({
                      ...selectedGame,
                      category: [e.target.value],
                    })
                  }
                >
                  <option value="">Seleccionar categoría</option>
                  {availableGameCategories.map((categoryName) => (
                    <option key={categoryName} value={categoryName}>
                      {categoryName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveChanges}
            disabled={!hasChanges}
          >
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
