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
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar
        onLoginClick={handleShowLogin}
        onRegisterClick={handleShowRegister}
      />
      <div className="container flex-grow-1">
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
          <Route path="/games/:code" element={<GameDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
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
