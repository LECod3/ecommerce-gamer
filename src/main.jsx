import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GamesContextProvider } from "./context/gamescontext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
