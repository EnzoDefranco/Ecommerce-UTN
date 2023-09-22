import React from "react";
import "./Books.css";
import { Stars } from "../Stars/Stars";

function ListOfBooks({ books }) {
  return (
    <ul className="container-products">
      {books.map((book) => (
        <li key={book.id} className="card-product">
          <div className="container-img">
            <img src={book.poster} alt="" />
          </div>
          <div className="content-card-product">
            <div className="stars">
                <Stars numberOfStars={book.estrellas} />
            </div>
            <h3>{book.title}</h3>
            <span className="add-cart">
              <i className="fas fa-shopping-basket"></i>
            </span>
            <p className="price">${book.paginas}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function NoBooksResults() {
  return <p>No se encontró el libro</p>;
}

export function Books({ books }) {
  const hasBooks = books.length > 0;
  return hasBooks ? <ListOfBooks books={books} /> : <NoBooksResults />;
}
