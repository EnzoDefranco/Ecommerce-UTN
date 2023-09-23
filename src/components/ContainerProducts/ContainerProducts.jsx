import React, { useEffect, useState, useRef } from "react";
import "./ContainerProducts.css";
import { useBooks } from "../hooks/useBooks";
import { Books } from "../Books/Books";


function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    
      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }
      if (search === '') {
        setError('No se puede buscar un libro vacio')
        return
      }
  
      if (search.length < 3) {
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
  
      if (search.length > 20) {
        setError('La busqueda debe tener menos de 20 caracteres')
        return
      }
  
      if (search.match(/^[0-9]+$/)) {
        setError('La busqueda no puede ser numerica')
        return
      }
  
      setError(null)
    
  }, [search])

  return { search, setSearch, error }
}

export const ContainerProducts = () => {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { books, getBooks } = useBooks({search, sort});

  const handleSubmit = (event) => {
    event.preventDefault();
    getBooks();
  };

  const handleSort = () => {
    setSort(!sort) 
  }

  const handleChange = (event) => {
    const newSearh = event.target.value;
    if (newSearh.startsWith(' ')) return
    setSearch(event.target.value);
  };


  

  return (
    <>
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder="Buscar libro por título, autor o palabra clave" />
        </form>
        
        {error && <p className="error-message">{error}</p>}</header>
        <div className="Filtrado">
          <p>Filtrar por valoracion en orden descendiente</p>
          <input onChange={handleSort} checked={sort} type="checkbox"  id="switch" /><label for="switch"></label>
        </div>
      <main>
        <Books books={books} />
      </main>
    </>
  );
};
