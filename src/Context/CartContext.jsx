import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState('');

  const getProducts = useCallback(async () => {
    if (productSearch !== '') {
      await axios
        .get(`http://localhost:4000/products?search=${productSearch}`)
        .then(({ data }) => setProducts(data.products));
    } else {
      await axios
        .get('http://localhost:4000/products')
        .then(({ data }) => setProducts(data.products));
    }
  }, [productSearch]);

  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:4000/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, [getProducts]);

  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("http://localhost:4000/products-cart", { name, img, price });

    getProducts();
    getProductsCart();
  }; 

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`http://localhost:4000/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:4000/products-cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  return (
    <CartContext.Provider
      value={{ cartItems, products, productSearch, setProductSearch, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;