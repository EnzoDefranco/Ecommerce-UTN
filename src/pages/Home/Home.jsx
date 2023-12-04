import React from 'react'
import { Header } from '../../components/Header/Header.jsx'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Footer, Main, SectionBanner } from '../../components/index.js'


import './Home.css'
import Cart from '../../components/Cart/index.jsx'
import Products from '../../components/Products/index.jsx'
import { CartProvider } from '../../Context/CartContext.jsx'
export const Home = () => {
  return (
    <>
    <CartProvider>

      <Header />
      <Navbar />
      <SectionBanner />
        <Main />
        <div className='mainn'>
          <Cart />
          <Products />
        </div>
        < Footer />
      </CartProvider>
    </>
  )
}
