import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false); // Estado para saber si estamos editando
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Solo para cambiarla, no se muestra
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Cargar los datos del usuario desde localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFullName(parsedUser.fullName || "");
      setEmail(parsedUser.email || "");
    } else {
      // Si no hay usuario logueado, redirigir al login
      navigate("/login");
    }
  }, [navigate]);

  const handleEditToggle = () => {
    setEditing(!editing);
    setError(""); // Limpiar errores al cambiar de modo
    setSuccess(""); // Limpiar mensajes de éxito
    setPassword(""); // Limpiar campos de contraseña al cancelar edición
    setConfirmPassword("");
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password && password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const updatedUser = { ...user, fullName, email };
    if (password) {
      // Si se ingresó una nueva contraseña, actualizarla
      updatedUser.password = password;
    }

    // Actualizar en localStorage
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Actualizar el usuario logueado

    setUser(updatedUser); // Actualizar el estado local del usuario
    setSuccess("Perfil actualizado exitosamente.");
    setEditing(false); // Salir del modo edición
    setPassword(""); // Limpiar campos de contraseña
    setConfirmPassword("");
  };

  if (!user) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <p>Cargando perfil...</p>
      </Container>
    );
  }

  return (
    <Container
      className="py-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}
    >
      <Card
        className="p-4 shadow-lg"
        style={{ width: "500px", maxWidth: "90%", borderRadius: "15px" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4 text-primary fw-bold">Mi Perfil</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          {!editing ? (
            // Modo de visualización
            <div>
              <p className="fs-5 mb-2">
                <strong>Nombre Completo:</strong> {user.fullName}
              </p>
              <p className="fs-5 mb-4">
                <strong>Correo Electrónico:</strong> {user.email}
              </p>
              <Button
                variant="primary"
                onClick={handleEditToggle}
                className="w-100"
              >
                Editar Perfil
              </Button>
            </div>
          ) : (
            // Modo de edición
            <Form onSubmit={handleProfileUpdate}>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Nueva Contraseña (opcional)</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Deja en blanco para no cambiar"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formConfirmPassword">
                <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirma la nueva contraseña"
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mb-2">
                Guardar Cambios
              </Button>
              <Button
                variant="secondary"
                onClick={handleEditToggle}
                className="w-100"
              >
                Cancelar
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
