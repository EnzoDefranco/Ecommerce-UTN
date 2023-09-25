import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <>
     <div className="container-hero">
      <div className="container hero">
        <div className="customer-support">
          <i className="fas fa-phone-square-alt"></i>
          <div className="content-customer-support">
            <span className="text">Soporte al cliente</span>
            <span className="number">+54 9 11 1234-5678</span>
          </div>
        </div>
        <div className="container-logo"> 
          <img src="../../images/logo.png" alt="" />
          <h1 className="logo"> 
            <a href="">TuLibro</a>
          </h1>
        </div>
        <div className="container-user">
          <i className="fas fa-user"></i>
          <i className="fas fa-cart-plus"></i>
          <div className="content-shopping-cart">
            <span className="text">Carrito</span>
            <span className="number">(0)</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
