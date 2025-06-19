import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Importamos componentes de React-Bootstrap

function AdminDashboard() {
  return (
    <Container className="py-5">
      {" "}
      {/* Container para centrar y dar padding */}
      <Row className="mb-4">
        {" "}
        {/* Row para el título */}
        <Col>
          <h2 className="text-center fw-bold text-primary">
            Panel de Administración
          </h2>
          <p className="text-center text-muted">
            Bienvenido al panel de control. Aquí podrás gestionar tu pastelería.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {" "}
        {/* Row para las tarjetas de resumen/opciones */}
        <Col md={6} lg={4}>
          {" "}
          {/* Columnas responsivas para tarjetas */}
          <Card className="shadow-sm h-100">
            {" "}
            {/* Tarjeta con sombra y altura 100% */}
            <Card.Body>
              <Card.Title className="text-success">
                Gestión de Productos
              </Card.Title>
              <Card.Text>Administra tus productos, precios y stock.</Card.Text>
              <Card.Link
                href="/admin/products"
                className="btn btn-outline-primary"
              >
                Ir a Productos
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="text-info">Gestión de Pedidos</Card.Title>
              <Card.Text>
                Revisa y procesa los pedidos de tus clientes.
              </Card.Text>
              <Card.Link
                href="/admin/orders"
                className="btn btn-outline-primary"
              >
                Ir a Pedidos
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="text-warning">
                Gestión de Usuarios
              </Card.Title>
              <Card.Text>
                Administra las cuentas de usuario registradas.
              </Card.Text>
              <Card.Link
                href="/admin/users"
                className="btn btn-outline-primary"
              >
                Ir a Usuarios
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
