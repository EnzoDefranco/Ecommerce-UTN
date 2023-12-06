import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header/Header.jsx'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Footer, Main, SectionBanner } from '../../components/index.js'
import './Home.css'
import Cart from '../../components/Cart/index.jsx'
import Products from '../../components/Products/index.jsx'
import { CartProvider } from '../../Context/CartContext.jsx'
import SearchBar from '../../components/SearchBar/index.jsx'


export const Home = () => {
  const [products, setProducts] = useState(null)
  const [productSearch, setProductSearch] = useState('')

  const getProducts = useCallback(async () => {
    if (productSearch !== '') {
      await axios
        .get(`http://localhost:4000/products?search=${productSearch}`)
        .then(({ data }) => {
          setProducts(data.products);
          console.log(data);
        });
    } else {
      await axios
        .get('http://localhost:4000/products')
        .then(({ data }) => {
          setProducts(data.products);
          console.log(data.products);
        });
    }
  }, [productSearch]);

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <CartProvider>
      <Header />
      <Navbar />
      <SectionBanner />
      <Main />
      <div className='mainn'>
        <SearchBar products setProductSearch={setProductSearch} />
        <Products products={products} />
      </div>
      <Footer />
      </CartProvider>
    </>
  )
}
