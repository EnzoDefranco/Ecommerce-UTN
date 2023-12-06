import React, { useContext } from 'react'
import './index.css'
import Cart from '../Cart'
import { CartContext } from '../../Context/CartContext'

export const SearchBar = () => {
  const { setProductSearch } = useContext(CartContext);

  return (
    <div className="searchBar">
      <input className="centerInput"
        type="text"
        placeholder="Busca un producto..."
        onChange={(e) => setProductSearch(e.target.value)}
      />
      <Cart className="rightCart" />
    </div>
  )
}

export default SearchBar