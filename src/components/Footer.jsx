import React from "react";
import "./Footer.css"; // Importa el archivo de estilos para el Footer
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importa iconos de redes sociales

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Pastelería</h3>
          <ul>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/eventos">Eventos</a>
            </li>
            <li>
              <a href="/cursos">Cursos</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>+ Info</h3>
          <ul>
            <li>
              <a href="/mi-historia">Mi historia</a>
            </li>
            <li>
              <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>
              Correo electrónico:{" "}
              <a href="mailto:tu_correo@ejemplo.com">tu_correo@ejemplo.com</a>
            </li>
            <li>
              Teléfono: <a href="tel:+5491112345678">+54 9 11 1234-5678</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a
              href="https://wa.me/tunumerodewhatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://facebook.com/tupagina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/tuinstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Somos Dolce Pastelería 2025. Todos los derechos reservados.</p>
        {/* Aquí podríamos añadir más información profesional */}
      </div>
    </footer>
  );
}

export default Footer;
