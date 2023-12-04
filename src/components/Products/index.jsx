import React,{ useContext} from 'react'
import "./index.css"
import {ProductsData} from '../../Data/ProductsData'
import {CartContext} from '../../Context/CartContext'

export const Products = () => {

    /* Traemos del context la funcion para agregar un producto */
    const { AddItemToCart } = useContext(CartContext);

  return (
    <ul className='container-products'>
      {ProductsData.map((product,i) => (
        <li key={i} className='card-product'>
          <div className='container-img'>
            <img src={product.img} alt='' />
          </div>
          <div className='content-card-product' >
            <div className="stars">
            <i  className="fas fa-star"></i>
            <i  className="fas fa-star"></i>
            <i  className="fas fa-star"></i>
            <i  className="fas fa-star"></i>
            <i  className="fas fa-star"></i>
            </div>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => AddItemToCart(product)}>Add to Cart</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Products

