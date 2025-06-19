import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Importamos componentes de React-Bootstrap
import { Form, Button, Container, Card } from "react-bootstrap";
// Ya no necesitamos la mayoría de los estilos de RegisterPage.css
// import "./RegisterPage.css"; // Esto puede eliminarse o reducirse a solo lo esencial

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!fullName.trim()) {
      validationErrors.fullName = "Por favor, ingresa tu nombre completo.";
    }

    if (!email.trim()) {
      validationErrors.email = "Por favor, ingresa tu correo electrónico.";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      validationErrors.email =
        "Por favor, ingresa un correo electrónico válido.";
    }

    if (!password.trim()) {
      validationErrors.password = "Por favor, ingresa tu contraseña.";
    } else if (password.length < 6) {
      validationErrors.password =
        "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "Por favor, confirma tu contraseña.";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No hay errores, proceder con el registro
      const newUser = {
        fullName,
        email,
        password,
      };

      // Guardar en LocalStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Redirigir a la página de inicio de sesión
      navigate("/login");
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
            <h2 className="fs-2 text-dark mb-2">Regístrate</h2>
            <p className="text-secondary fs-6">
              Crea una cuenta para acceder a todas las funciones.
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                isInvalid={!!errors.fullName} // Muestra el estilo de error si hay un error
              />
              <Form.Control.Feedback type="invalid">
                {" "}
                {/* Mensaje de error de Bootstrap */}
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 py-2">
              Registrarme
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-decoration-none text-primary">
                Inicia sesión
              </Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterPage;
