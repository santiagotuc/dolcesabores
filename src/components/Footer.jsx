import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importamos componentes de React-Bootstrap
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importa iconos de redes sociales
// Ya no necesitamos Footer.css porque Bootstrap manejará la mayoría de los estilos
// import "./Footer.css";

function Footer() {
  return (
    // <footer className="footer"> original
    <footer className="bg-success text-white py-4 mt-5">
      {" "}
      {/* Clases de Bootstrap para fondo, texto y padding. mt-5 para un margen superior */}
      <Container>
        {" "}
        {/* Envuelve el contenido para centrarlo y limitar el ancho */}
        <Row className="mb-4">
          {" "}
          {/* Row para las secciones del footer, mb-4 para margen inferior */}
          <Col md={3} sm={6} className="mb-3">
            {" "}
            {/* Columnas responsivas: 3 en md+, 6 en sm+ */}
            <h5>Pastelería</h5>
            <ul className="list-unstyled">
              {" "}
              {/* list-unstyled quita los puntos de la lista */}
              <li>
                <a
                  href="/productos"
                  className="text-white text-decoration-none"
                >
                  Productos
                </a>
              </li>
              <li>
                <a href="/eventos" className="text-white text-decoration-none">
                  Eventos
                </a>
              </li>
              <li>
                <a href="/cursos" className="text-white text-decoration-none">
                  Cursos
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h5>+ Info</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/mi-historia"
                  className="text-white text-decoration-none"
                >
                  Mi historia
                </a>
              </li>
              <li>
                <a
                  href="/preguntas-frecuentes"
                  className="text-white text-decoration-none"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>
                Correo electrónico:{" "}
                <a
                  href="mailto:tu_correo@ejemplo.com"
                  className="text-white text-decoration-none"
                >
                  correo@ejemplo.com
                </a>
              </li>
              <li>
                Teléfono:{" "}
                <a
                  href="tel:+5491112345678"
                  className="text-white text-decoration-none"
                >
                  +54 9 381 111 1111
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h5>Redes Sociales</h5>
            <div className="d-flex gap-3 fs-4">
              {" "}
              {/* d-flex y gap-3 para espaciado, fs-4 para el tamaño de icono */}
              <a
                href="https://wa.me/tunumerodewhatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/tupagina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/tuinstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="border-top pt-3 mt-3 text-center">
          {" "}
          {/* border-top y pt-3 para la línea divisoria y padding superior */}
          <Col>
            <p className="mb-0">
              &copy; Somos Dolce Pastelería 2025. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
