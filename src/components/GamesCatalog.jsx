import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import GameCard from "./GameCard";
import { GamesContext } from "../context/gamescontext.jsx";
import Pagination from "./Pagination.jsx";
import "../styles/GamesCatalog.css";

const GamesCatalog = () => {
  const { games } = useContext(GamesContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceOrder, setPriceOrder] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const categories = [
    "all",
    ...new Set(games.flatMap((game) => game.category)),
  ].sort();

  const togglePriceOrder = () => {
    setPriceOrder((prev) => prev === null ? "asc" : prev === "asc" ? "desc" : null);
    setCurrentPage(1);
  };

  const filteredGames = games.filter((game) => {
    const matchTitle = game.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ||
      (Array.isArray(game.category)
        ? game.category.includes(category)
        : game.category === category);

    return matchTitle && matchCategory;
  })
  .sort((a, b) => {
    if (priceOrder === "asc") return a.price - b.price;
    if (priceOrder === "desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(filteredGames.length / pageSize);
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, filteredGames.length);

  return (
    <div className="container my-5">
      <div className="mb-3 text-center">
        <h3>Todos los juegos</h3>

        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-4">
          <input
            id="search-games"
            name="search"
            type="text"
            className="form-control w-100 w-md-50"
            placeholder="Buscar juegos..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <div className="d-flex gap-2 w-100 w-md-auto">
            <select
              id="page-size-select"
              name="pageSize"
              className="form-select"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={4}>4 por página</option>
              <option value={8}>8 por página</option>
              <option value={12}>12 por página</option>
            </select>

            <select
              id="category-select"
              name="category"
              className="form-select category-select"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Todas las categorías" : cat}
                </option>
              ))}
            </select>

            <button className="btn btn-outline-light price-sort-btn ${priceOrder ? 'active' : ''}" onClick={togglePriceOrder} title="Ordenar por precio">
              💲
              {priceOrder === "asc" && "↑"}
              {priceOrder === "desc" && "↓"}
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="text-light opacity-75 mb-2">
          Mostrando {start}–{end} de {filteredGames.length} juegos
        </p>
        {paginatedGames.length > 0 ? (
          paginatedGames.map((game) => (
            <div
              key={game.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <GameCard game={game} />
            </div>
          ))
        ) : (
          <p className="text-light opacity-75">No se encontraron juegos.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default GamesCatalog;
