import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut, LogIn } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
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

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          Dulce Sabores
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">
          Inicio
        </Link>
        <Link to="/products" className="navbar-item">
          Productos
        </Link>
        {isLoggedIn ? (
          <div className="navbar-menu-right">
            <span className="navbar-item">
              Hola, {user?.fullName || "Usuario"}
            </span>
            <Link to="/cart" className="navbar-item navbar-cart">
              <ShoppingCart className="icon" />
              Carrito
            </Link>
            <Link to="/profile" className="navbar-item">
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
            <Link to="/login" className="navbar-item navbar-login">
              <LogIn className="icon" />
              Iniciar sesión
            </Link>
            <Link to="/register" className="navbar-item">
              Regístrate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
