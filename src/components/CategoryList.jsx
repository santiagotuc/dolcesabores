import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap"; // Importamos componentes

function CategoryList() {
  // Ejemplo de categorías, podrías obtenerlas de una API más tarde
  const categories = [
    { id: 1, name: "Tortas y Pasteles" },
    { id: 2, name: "Galletas y Bizcochos" },
    { id: 3, name: "Cupcakes y Muffins" },
    { id: 4, name: "Postres Individuales" },
    { id: 5, name: "Especiales de Temporada" },
  ];

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-primary">
            Nuestras Categorías de Productos
          </h2>
          <p className="text-center text-muted">
            Explora nuestra deliciosa variedad por categoría.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {" "}
        {/* Centramos la lista */}
        <Col md={8} lg={6}>
          {" "}
          {/* Limitamos el ancho de la lista en pantallas grandes */}
          <ListGroup className="shadow-sm">
            {" "}
            {/* Lista con un poco de sombra */}
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                action
                href={`/products/category/${category.id}`} // Enlace a la categoría
                className="d-flex justify-content-between align-items-center"
              >
                {category.name}
                {/* Puedes añadir un badge con la cantidad de productos si lo tuvieras */}
                {/* <Badge bg="primary" pill>14</Badge> */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryList;
