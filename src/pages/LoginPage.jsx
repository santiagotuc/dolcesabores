import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Importamos componentes de React-Bootstrap
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
// Ya no necesitamos la mayoría de los estilos de LoginPage.css
// import "./LoginPage.css"; // Esto puede eliminarse o reducirse a solo lo esencial

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Correo electrónico o contraseña incorrectos.");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", backgroundColor: "#f0f0f0", padding: "20px" }}
    >
      <Card
        className="p-4 shadow-sm"
        style={{ width: "400px", maxWidth: "100%", borderRadius: "12px" }}
      >
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="fs-2 text-dark mb-2">Iniciar Sesión</h2>
            <p className="text-secondary fs-6">
              Inicia sesión para acceder a tu cuenta.
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}{" "}
            {/* Componente Alert para errores */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {" "}
              {/* mb-3 para margen inferior */}
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              {" "}
              {/* mb-4 para margen inferior */}
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 py-2">
              {" "}
              {/* w-100 para ancho completo, py-2 para padding vertical */}
              Iniciar Sesión
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link
              to="/forgot-password"
              className="text-decoration-none text-primary"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <p className="mt-2">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/register"
                className="text-decoration-none text-primary"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
