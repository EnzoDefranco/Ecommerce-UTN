import React from 'react'
import './index.css'
import Cart from '../Cart'

export const SearchBar = ({ setProductSearch }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Busca un producto..."
        onChange={(e) => setProductSearch(e.target.value)}
      />
      <div className="cart">
        <Cart />
      </div>
    </div>
  )
}

export default SearchBar