import React, { useState, useContext } from "react";
import GameCard from "./GameCard";
import { GamesContext } from "../context/gamescontext.jsx";

const GamesCatalog = () => {
    const { games } = useContext(GamesContext);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    const categories = [
    "all",
    ...new Set(games.map((game) => game.category)),
    ];

    const filteredGames = games.filter((game) => {
        const matchTitle = game.title.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "all" || game.category === category;

        return matchTitle && matchCategory;
    });

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
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="form-select w-25"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                   <option value="all">Todas</option>
                   <option value="Terror / Acción">Terror / Acción</option>
                   <option value="RPG / Aventura">RPG / Aventura</option>
                   <option value="Acción / Aventura">Acción / Aventura</option>
                   <option value="Deportes">Deportes</option>
                </select>
             </div>
            </div>

            <div className="row">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <div key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <GameCard game={game} />
                        </div>
                    ))
                ) : (
                    <p className="text-muted">No se encontraron juegos.</p>
                )}
            </div>
        </div>
    );
};

export default GamesCatalog;