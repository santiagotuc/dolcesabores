import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { ShoppingCart, LogIn, LogOut, User } from "react-feather";

// ¡NUEVO! Importa tu imagen de logo
import logoImage from "../images/logodolce.png";

const AppNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    localStorage.removeItem("cartItems"); // Opcional: limpiar carrito al cerrar sesión
    setIsLoggedIn(false);
    setUser(null);
    navigate("/"); // Redirigir a la página de inicio
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* ¡MODIFICADO! Usamos la imagen en lugar del texto */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoImage}
            alt="Logo Dolce Sabores"
            height="70" // Ajusta la altura según sea necesario
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Productos
            </Nav.Link>
            {/* Si tienes Categorías, considera un NavDropdown aquí */}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text className="me-3">
                  Hola, {user?.fullName || "Usuario"}
                </Navbar.Text>
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="d-flex align-items-center me-3"
                >
                  <ShoppingCart size={20} className="me-1" /> Carrito
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/profile"
                  className="d-flex align-items-center me-3"
                >
                  <User size={20} className="me-1" /> Perfil
                </Nav.Link>
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="d-flex align-items-center"
                >
                  <LogOut size={20} className="me-1" /> Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="d-flex align-items-center me-3"
                >
                  <LogIn size={20} className="me-1" /> Iniciar sesión
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Regístrate
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
