import React from "react";
import "./Navbar.css";
import { BurguerBotton } from "../BurguerButton/BurguerButton";
import { useState } from "react";
import { BG } from "./BG";



export function Navbar () {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  return (
    <>
      <div className="container-navbar">
        {/* Propiedades y estilos que se aplican a todo el navbar */}
        <nav className="container navbar">
          {/* Propiedades específicas del nav */}
          <div className="nav-controls">
            {/* Div que abarca los controles del navbar, como abrir el menú, ir al inicio, etc. */}
            <button className="open-menu" aria-label="Abrir menú">
              {/* <i className="fas fa-bars"></i> Icono de barras */}
              <BurguerBotton clicked={clicked} handleClick={handleClick} />
            </button>
          </div>
          <div className="menu">
            <ul className={`list ${clicked ? 'active' : ''}`} >
              {/* Lista de elementos de menú */}
              <li>
                <a href="#">Tematica</a>
              </li>
              <li>
                <a href="#">Autores</a>
              </li>
              <li>
                <a href="#">Editoriales</a>
              </li>
              <li>
                <a href="#">Idioma</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="./pages/form.html">Contacto</a>
              </li>
            </ul>
            <BG clicked={clicked} handleClick={handleClick} />
            <div className={`initial ${clicked ? ' active' : ''}`}>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
