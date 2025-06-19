import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar"; // Asegúrate de que el nombre coincida
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./components/AdminDashboard"; // Importa si ya la usas en rutas
import CategoryList from "./components/CategoryList"; // Importa si ya la usas en rutas
import ProductList from "./components/ProductList"; // Importa si ya la usas en rutas
import ProfilePage from "./pages/ProfilePage"; // ¡NUEVO! Importa el componente ProfilePage
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />{" "}
        <Route path="/cart" element={<CartPage />} />
        {/* ¡NUEVO! Ruta para el perfil */}
        {/* Rutas para los nuevos componentes vacíos (si los quieres probar) */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products" element={<ProductList />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
