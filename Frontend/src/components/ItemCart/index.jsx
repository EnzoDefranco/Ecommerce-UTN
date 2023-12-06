
import React,{useContext}  from "react";
import {CartContext} from '../../Context/CartContext'
import './index.css'

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;
  
    return (
      <div className="cartItem">
        <img src={item.img} alt={item.name} />
        <div className="dataContainer">
          <div className="left">
            <p>{item.name}</p>
            <div className="buttons">
              <button onClick={() => editItemToCart(item._id, "add", amount)}>
                AGREGAR
              </button>
              <button onClick={() => editItemToCart(item._id, "del", amount)}>
                SACAR
              </button>
            </div>
          </div>
          <div className="right">
            <div>{item.amount}</div>
            <p>Total: ${item.amount * item.price}</p>
          </div>
        </div>
      </div>
    );
  };