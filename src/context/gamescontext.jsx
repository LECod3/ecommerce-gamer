import { createContext, useState } from "react";
import { initialGames } from "../data/Games";

// eslint-disable-next-line react-refresh/only-export-components
export const GamesContext = createContext();
export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState(initialGames);
  const dataGames = { games, setGames };

  const deleteGame = (id) => {
    setGames((prev) => prev.filter((game) => game.id !== id));
  };

  const updateGame = (updatedGame) => {
    setGames((prev) => prev.map((game) => game.id === updatedGame.id ? updatedGame : game))
  };

  return (
    <GamesContext.Provider value={{ ...dataGames, deleteGame, updateGame }}>{children}</GamesContext.Provider>
  );
};
