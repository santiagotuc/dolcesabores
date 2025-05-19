import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css"; // Importa el archivo CSS para los estilos

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
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
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
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h2 className="register-title">Regístrate</h2>
          <p className="register-subtitle">
            Crea una cuenta para acceder a todas las funciones.
          </p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="fullName" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
              placeholder="Tu nombre completo"
            />
            {errors.fullName && (
              <div className="register-error">{errors.fullName}</div>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Tu correo electrónico"
            />
            {errors.email && (
              <div className="register-error">{errors.email}</div>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Tu contraseña"
            />
            {errors.password && (
              <div className="register-error">{errors.password}</div>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Confirma tu contraseña"
            />
            {errors.confirmPassword && (
              <div className="register-error">{errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="register-button">
            Registrarme
          </button>
        </form>
        <div className="register-footer">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="register-footer-link">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
