import React from "react";

export function Stars({ numberOfStars }) {
    // Redondea el número de estrellas a un número entero
    const roundedStars = Math.round(numberOfStars);
  
    // Crea un array con la cantidad de estrellas redondeadas
    const starsArray = Array.from({ length: roundedStars }, (_, index) => (
      <i key={index} className="fas fa-star"></i>
    ));
  
    return <div>{starsArray}</div>;
  }