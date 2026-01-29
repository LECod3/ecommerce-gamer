import { createContext, useState } from "react";
import { initialGames } from "../data/Games";

// eslint-disable-next-line react-refresh/only-export-components
export const GamesContext = createContext();
export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState(initialGames);
  const dataGames = { games, setGames };

  return (
    <GamesContext.Provider value={dataGames}>{children}</GamesContext.Provider>
  );
};
