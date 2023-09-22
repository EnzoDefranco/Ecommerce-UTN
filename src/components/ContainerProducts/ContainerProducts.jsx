import React from "react";
import "./ContainerProducts.css";
import { useBooks } from "../hooks/useBooks";
import { Books } from "../Books/Books";



export const ContainerProducts = () => {

    const {books} = useBooks();

  return (
    <>
      <header>
        <form className="search-form">
          <input placeholder="Buscar libro por título, autor o palabra clave" />
        </form>
      </header>
      <main>
        <Books books={books} />
      </main>
    </>
  );
};
