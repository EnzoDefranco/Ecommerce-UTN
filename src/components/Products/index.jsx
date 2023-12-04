import React,{ useContext} from 'react'
import "./index.css"
import {CartContext} from '../../Context/CartContext'

export const Products = () => {

  const { addItemToCart, products } = useContext(CartContext);
  return (
    <ul className='container-products'>
      {products && products.map((product,i) => (
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
            <div>
              {!product.inCart ? (
                <button onClick={() => addItemToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <button>En el carrito</button>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Products

