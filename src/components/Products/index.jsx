import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext'; 
import "./index.css"

export const Products = ({products}) => {


  return (
    <div>
    {products && products.length > 0 ? (
      <ul className='container-products'>
        {products.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </ul>
    ) : (
      <div className="no-books-message">No se encontraron productos...</div>
    )}
  </div>
  )
}

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li 
      key={product.id} 
      className={`card-product ${isSelected ? 'selected' : ''}`} 
      onClick={toggleSelect}
    >
      <div className='container-img'>
        <img src={product.img} alt='' />
      </div>
      <div className='content-card-product'>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
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
  );
};

export default Products;

