import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut, LogIn, Menu } from "lucide-react"; // Importa el icono de Menu
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          Dulce Sabores
        </Link>
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          {" "}
          {/* Botón hamburguesa */}
          <Menu className="icon" />
        </button>
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {" "}
        {/* Clase 'open' para mostrar el menú */}
        <Link
          to="/"
          className="navbar-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link
          to="/products"
          className="navbar-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Productos
        </Link>
        {isLoggedIn ? (
          <div className="navbar-menu-right">
            <span className="navbar-item">
              Hola, {user?.fullName || "Usuario"}
            </span>
            <Link
              to="/cart"
              className="navbar-item navbar-cart"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="icon" />
              Carrito
            </Link>
            <Link
              to="/profile"
              className="navbar-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="icon" />
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="navbar-item navbar-logout"
            >
              <LogOut className="icon" />
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="navbar-menu-right">
            <Link
              to="/login"
              className="navbar-item navbar-login"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="icon" />
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="navbar-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Regístrate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
