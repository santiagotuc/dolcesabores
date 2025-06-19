import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Asegúrate que las rutas de imágenes estén correctas
import product1 from "../images/product1-placeholder.jpg";
import product2 from "../images/product2-placeholder.jpg";
import product3 from "../images/product3-placeholder.jpg";

function ProductList() {
  const products = [
    {
      id: "prod1",
      name: "Torta Selva Negra",
      price: "25000",
      image: product1,
      description: "Clásica torta con capas de chocolate y crema.",
    },
    {
      id: "prod2",
      name: "Galletas de Mantequilla",
      price: "8500",
      image: product2,
      description: "Deliciosas galletas artesanales, ideales para el café.",
    },
    {
      id: "prod3",
      name: "Cheesecake de Frutos Rojos",
      price: "30000",
      image: product3,
      description: "Cremoso cheesecake con un toque ácido de frutos rojos.",
    },
  ];

  // Función para añadir al carrito
  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      // Si el producto ya existe, incrementa la cantidad
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Si no existe, añádelo con cantidad 1
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${product.name} añadido al carrito!`); // Puedes reemplazar esto con una notificación Toast
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-primary">
            Todos Nuestros Productos
          </h2>
          <p className="text-center text-muted">
            Descubre la colección completa de nuestros dulces.
          </p>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="h-100 shadow-sm text-center">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold mb-2">{product.name}</Card.Title>
                <Card.Text className="text-secondary">
                  {product.description}
                </Card.Text>
                <Card.Text className="text-success fs-5 fw-bold">
                  ${product.price}
                </Card.Text>{" "}
                {/* Asegúrate de mostrar el precio correctamente */}
                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() => handleAddToCart(product)} // Llama a la función al hacer clic
                >
                  Agregar al Carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
