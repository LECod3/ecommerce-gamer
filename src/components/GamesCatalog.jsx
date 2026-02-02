import { useState, useContext } from "react";
import GameCard from "./GameCard";
import { GamesContext } from "../context/gamescontext.jsx";
import Pagination from "./Pagination.jsx";

const GamesCatalog = () => {
  const { games } = useContext(GamesContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const categories = [
    "all",
    ...new Set(games.flatMap((game) => game.category)),
  ].sort();

  const filteredGames = games.filter((game) => {
    const matchTitle = game.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ||
      (Array.isArray(game.category)
        ? game.category.includes(category)
        : game.category === category);

    return matchTitle && matchCategory;
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Todos los juegos</h3>

        <div className="d-flex gap-2 w-100 w-md-50">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar juegos..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="form-select w-auto"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={6}>6 por paginás</option>
            <option value={12}>12 por paginás</option>
            <option value={24}>24 por paginás</option>
          </select>

          <select
            className="form-select w-25"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Todas" : cat}
              </option>
            ))}
          </select>
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
