import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar los ítems del carrito desde localStorage al montar el componente
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Función para formatear el precio
  const formatPrice = (price) => {
    // Elimina el símbolo "$" y el punto de mil para la conversión a número, luego lo vuelve a agregar
    const numericPrice = parseFloat(
      price.replace("$", "").replace(".", "").replace(",", "")
    );
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(numericPrice);
  };

  // Función para incrementar la cantidad de un producto
  const handleIncreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Función para decrementar la cantidad de un producto
  const handleDecreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(
      (item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item // No permitir menos de 1
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Mensaje si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <Container
        className="py-5 d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <Alert variant="info" className="text-center">
          Tu carrito está vacío. ¡Explora nuestros productos y añade algunos!
        </Alert>
        <Button as={Link} to="/products" variant="primary" size="lg">
          Ir a Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-primary">
            Tu Carrito de Compras
          </h2>
          <p className="text-center text-muted">
            Revisa los productos que has añadido.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          {" "}
          {/* Columna para la lista de productos */}
          <ListGroup variant="flush" className="shadow-sm mb-4">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex align-items-center py-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "15px",
                  }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="text-muted mb-1">
                    {item.description || "Producto sin descripción"}
                  </p>
                  <p className="fw-bold text-success mb-0">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2 fs-5">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-3"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          {" "}
          {/* Columna para el resumen del carrito */}
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                Resumen del Pedido
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  Subtotal:{" "}
                  <span className="fw-bold">
                    {formatPrice(calculateTotal().toString())}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  Envío: <span className="fw-bold">A calcular</span>{" "}
                  {/* Placeholder */}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between fs-4 fw-bold text-primary">
                  Total: <span>{formatPrice(calculateTotal().toString())}</span>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="success" size="lg" className="w-100 mt-4">
                Proceder al Pago
              </Button>
              <Button
                variant="outline-secondary"
                className="w-100 mt-2"
                as={Link}
                to="/products"
              >
                Seguir Comprando
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
