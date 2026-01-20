import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutPage from "./pages/AboutPage";
import GameDetailPage from "./pages/GameDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ModalLogin from "./components/ModalLogin";
import ModalRegister from "./components/ModalRegister";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleSwitchToRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  };
  const handleSwitchToLogin = () => {
    handleCloseRegister();
    handleShowLogin();
  };
  return (
    <div className="container">
      <Navbar
        onLoginClick={handleShowLogin}
        onRegisterClick={handleShowRegister}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game/:id" element={<GameDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ModalLogin
        show={showLogin}
        handleClose={handleCloseLogin}
        handleSwitchToRegister={handleSwitchToRegister}
      />
      <ModalRegister
        show={showRegister}
        handleClose={handleCloseRegister}
        handleSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
}

export default App;
