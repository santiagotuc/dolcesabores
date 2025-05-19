import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Incluye el Navbar aquí */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<CategoryPage />}
        />{" "}
        {/* Ruta dinámica para cada categoría */}
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* Ruta para cualquier otra URL que no coincida */}
        {/* Define otras rutas según sea necesario */}
      </Routes>
      <Footer /> {/* Incluye el Footer aquí */}
    </Router>
  );
};

export default App;
