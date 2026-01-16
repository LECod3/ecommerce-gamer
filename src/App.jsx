import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";
import GameDetailPage from "./pages/GameDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="container">
      {/* Aquí irá el Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game/:id" element={<GameDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Aquí irá el Footer */}
    </div>
  );
}

export default App;
