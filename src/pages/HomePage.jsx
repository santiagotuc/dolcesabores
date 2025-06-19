import React from "react";
// Importamos componentes de React-Bootstrap
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ReviewCard from "../components/ReviewCard";

// Asegúrate de que estas rutas sean correctas o ajústalas
import heroImage from "../images/p-image-placeholder.jpg"; // Usando tu nombre de imagen
import product1 from "../images/product1-placeholder.jpg";
import product2 from "../images/product2-placeholder.jpg";
import product3 from "../images/product3-placeholder.jpg";

const HomePage = () => {
  const reviews = [
    {
      author: "Santiago Molina",
      rating: 5,
      text: "¡Delicioso todo! La torta de chocolate es increíble.",
    },
    {
      author: "Vicky Acuña",
      rating: 5,
      text: "Excelente pastelería, muy buena calidad y atención.",
    },
  ];

  const products = [
    {
      id: "home_prod1",
      name: "Torta de Chocolate",
      price: "28000",
      image: product1,
    },
    {
      id: "home_prod2",
      name: "Torta de Frutos Rojos",
      price: "21000",
      image: product2,
    },
    {
      id: "home_prod3",
      name: "Torta de chocolate 2",
      price: "25000",
      image: product3,
    },
  ];

  // Función para añadir al carrito (duplicada intencionalmente, se podría abstraer más tarde)
  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${product.name} añadido al carrito!`);
  };

  return (
    <div>
      {/* Sección Hero */}
      <div
        className="hero-section position-relative overflow-hidden"
        style={
          {
            // Puedes ajustar esta altura o dejarla que la imagen defina
          }
        }
      >
        <img
          src={heroImage}
          alt="Imagen de bienvenida"
          className="img-fluid w-100 d-block"
          style={{ objectFit: "cover", maxHeight: "600px" }}
        />
        <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white p-3">
          <h1 className="display-4 fw-bold mb-3">
            ¡Te invito a conocer mi pastelería!
          </h1>
          {/* El botón "Comprar Online" podría llevar a la página de productos o a una categoría principal */}
          <Button variant="success" size="lg" as={Link} to="/products">
            Comprar online
          </Button>
        </div>
      </div>

      {/* Sección de información */}
      <Container className="py-5">
        <Row className="text-center justify-content-around">
          <Col md={4} sm={6} className="mb-4">
            <div className="fs-1 text-success mb-2">🚚</div>
            <h3 className="fw-bold mb-2">ENVÍOS</h3>
            <p className="text-secondary">
              Hacemos envíos a domicilio a todo Tafí Viejo, San Miguel de
              Tucumán y Yerba Buena
            </p>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <div className="fs-1 text-success mb-2">⏱️</div>
            <h3 className="fw-bold mb-2">PEDIDOS</h3>
            <p className="text-secondary">
              Tomamos pedidos con un mínimo de 48hs hábiles o según
              disponibilidad
            </p>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <div className="fs-1 text-success mb-2">🛒</div>
            <h3 className="fw-bold mb-2">DISPONIBILIDAD</h3>
            <p className="text-secondary">
              Elegí la fecha de entrega al agregar el producto al carrito
            </p>
          </Col>
        </Row>
      </Container>

      {/* Sección para productos recomendados */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold">RECOMENDADOS DE LA SEMANA</h2>
        <Row className="g-4 justify-content-center">
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex"
            >
              <Card className="h-100 shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold mb-2">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="text-success fs-5 fw-bold">
                    ${product.price}
                  </Card.Text>{" "}
                  {/* Muestra el precio con $ */}
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => handleAddToCart(product)} // Llama a la función
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sección de reseñas */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">
          Lo que dicen nuestros clientes
        </h2>
        <Row className="g-4 justify-content-center">
          {reviews.map((review, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex">
              <ReviewCard
                author={review.author}
                rating={review.rating}
                text={review.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
