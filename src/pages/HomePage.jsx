import React from "react";
import "./HomePage.css";
import HeroImage from "../images/p-image-placeholder.jpg";
import Product1Image from "../images/product1-placeholder.jpg"; // Importa la imagen del producto 1
import Product2Image from "../images/product2-placeholder.jpg"; // Importa la imagen del producto 2
import Product3Image from "../images/product3-placeholder.jpg"; // Importa la imagen del producto 3
import ReviewCard from "../components/ReviewCard"; // Importa el componente ReviewCard

function HomePage() {
  const reviews = [
    {
      author: "Santiago Molina",
      rating: 5,
      text: "¡Delicioso todo! La torta de chocolate es increíble.",
    },
    {
      author: "Vicky acuña",
      rating: 5,
      text: "Excelente pastelería, muy buena calidad y atención.",
    },
    // Añade más reseñas aquí
  ];
  return (
    <div className="home-page">
      {/* Sección de la imagen principal */}
      <div className="hero-section">
        <img
          src={HeroImage}
          alt="Imagen de bienvenida"
          style={{ width: "100%", display: "block" }}
        />
        <div className="hero-content">
          <h1>¡Te invito a conocer mi pastelería!</h1>
          <button className="buy-online-button">Comprar online</button>
        </div>
        {/* La imagen de fondo se manejará con CSS */}
      </div>

      {/* Sección de información */}
      <div className="info-section">
        <div className="info-block">
          <div className="info-icon">
            {/* Aquí irá el icono de envíos */}
            🚚
          </div>
          <h3>ENVÍOS</h3>
          <p>
            Hacemos envíos a domicilio a todo Tafi Viejo, San Miguel de Tucumán
            y Yerba Buena
          </p>
        </div>
        <div className="info-block">
          <div className="info-icon">
            {/* Aquí irá el icono de pedidos */}
            ⏱️
          </div>
          <h3>PEDIDOS</h3>
          <p>
            Tomamos pedidos con un mínimo de 48hs hábiles o según disponibilidad
          </p>
        </div>
        <div className="info-block">
          <div className="info-icon">
            {/* Aquí irá el icono de disponibilidad */}
            🛒
          </div>
          <h3>DISPONIBILIDAD</h3>
          <p>Elegí la fecha de entrega al agregar el producto al carrito</p>
        </div>
      </div>
      {/* Nueva sección para productos recomendados */}
      <section className="recommended-products">
        <h2>RECOMENDADOS DE LA SEMANA</h2>
        <div className="products-grid">
          {/* Aquí irán los componentes de cada producto */}
          <div className="product-card">
            <img src={Product1Image} alt="Producto 1" />
            <h3>Torta de Chocolate</h3>
            <p className="price">$28000.00</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={Product2Image} alt="Producto 2" />
            <h3>Torta de Frutos Rojos</h3>
            <p className="price">$21000.00</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={Product3Image} alt="Producto 3" />
            <h3>Torta de chocolate 2</h3>
            <p className="price">$25000.00</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          {/* Puedes añadir más productos aquí */}
        </div>
      </section>

      {/* Sección de reseñas */}
      <section className="customer-reviews">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              author={review.author}
              rating={review.rating}
              text={review.text}
            />
          ))}
        </div>
      </section>

      {/* Sección de información */}
      <div className="info-section">
        {/* ... tu sección de información ... */}
      </div>
    </div>
  );
}

export default HomePage;
