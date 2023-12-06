import React from "react";
import "./Feature.css";

export const Feature = () => {
  return (
    <>
      <div className="divColor">

      </div>
      <section className="container container-features">
        <div className="card-feature">
          <i className="fas fa-shopping-basket"></i>
          <div className="feature-content">
            <span>Envio gratis</span>
            <p>Para compras mayores a $5000</p>
          </div>
        </div>
        <div className="card-feature">
          <i className="fas fa-shopping-basket"></i>
          <div className="feature-content">
            <span>Envio gratis</span>
            <p>Para compras mayores a $5000</p>
          </div>
        </div>
        <div className="card-feature">
          <i className="fas fa-shopping-basket"></i>
          <div className="feature-content">
            <span>Envio gratis</span>
            <p>Para compras mayores a $5000</p>
          </div>
        </div>
        <div className="card-feature">
          <i className="fas fa-shopping-basket"></i>
          <div className="feature-content">
            <span>Envio gratis</span>
            <p>Para compras mayores a $5000</p>
          </div>
        </div>
      </section>
      <section className="container top-products">
        <h1 className="heading-1">Libros más vendidos</h1>
        <div className="container-options">
          <span className="act">Destacados</span>
          <span>Mas recientes</span>
          <span>Mas vendidos</span>
        </div>
      </section>
    </>
  );
};
