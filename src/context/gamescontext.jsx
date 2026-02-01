import { createContext, useState, useEffect } from "react";
import { initialGames } from "../data/Games";

// eslint-disable-next-line react-refresh/only-export-components
export const GamesContext = createContext();
export const GamesContextProvider = ({ children }) => {
  const initialGamesFromStorage = JSON.parse(localStorage.getItem("games")) || [
    ...initialGames
  ];
  const [games, setGames] = useState(initialGames);
  const dataGames = { games, setGames };

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const deleteGame = (id) => {
    setGames(games.filter((g) => g.id !== id));
  };

  const updateGame = (updatedGame) => {
    setGames(games.map((g) => g.id === updatedGame.id ? updatedGame : g));
  };

  const addGame = (newGame) => {
    setGames([...games, { ...newGame, id: Date.now(), }, ]);
  };

  return (
    <GamesContext.Provider value={{ ...dataGames, deleteGame, updateGame, addGame }}>{children}</GamesContext.Provider>
  );
};
