import React from "react";
import { useState } from "react";
import GameCard from "./GameCard";

const GamesCatalog = ({ games }) => {
    const [search, setSearch] = useState("");

    const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Todos los juegos</h3>

                <input 
                    type="text"
                    className="form-control w-50"
                    placeholder="Buscar juegos..."
                    value={search}
                    onChage={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="row">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <div key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <GameCard game={game} />
                        </div>
                    ))
                ) : (
                    <p>No se encontraron juegos.</p>
                )}
            </div>
        </div>
    );
};

export default GamesCatalog;