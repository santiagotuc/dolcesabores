import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Importamos componentes de React-Bootstrap
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// Todavía usaremos estos iconos si quieres mantenerlos
import { ShoppingCart, User, LogOut, LogIn } from "react-feather";
// Ya no necesitamos Navbar.css porque Bootstrap manejará la mayoría de los estilos
// import "./Navbar.css";

const AppNavbar = () => {
  // Renombrado a AppNavbar para evitar conflicto con el componente de Bootstrap
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
    // <nav className="navbar"> original
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      {" "}
      {/* bg, expand, sticky son props de Bootstrap */}
      <Container>
        {" "}
        {/* Envuelve el contenido para centrarlo y limitar el ancho */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-dark">
          Dolce Sabores
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        {/* Botón hamburguesa */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {" "}
            {/* Alinea los items a la izquierda */}
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Productos
            </Nav.Link>
            {/* Si quieres agregar un dropdown de categorías, sería aquí: */}
            {/* <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/tortas">Tortas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/galletas">Galletas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categoria/especiales">Especiales</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text className="me-3">
                  Hola, {user?.fullName || "Usuario"}
                </Navbar.Text>
                {/* ¡ENLACE AL CARRITO! */}
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="d-flex align-items-center me-3"
                >
                  <ShoppingCart size={20} className="me-1" /> Carrito
                </Nav.Link>
                {/* ¡NUEVO ENLACE AL PERFIL! */}
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
