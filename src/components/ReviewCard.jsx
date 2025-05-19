// components/ReviewCard.jsx
import React from "react";
import "./ReviewCard.css"; // Importa estilos para la tarjeta de reseña

function ReviewCard({ author, rating, text }) {
  // Función para generar las estrellas según la calificación
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return <div className="rating">{stars}</div>;
  };

  return (
    <div className="review-card">
      <h4 className="author">{author}</h4>
      {renderStars(rating)}
      <p className="text">{text}</p>
    </div>
  );
}

export default ReviewCard;
