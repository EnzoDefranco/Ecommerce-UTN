import React from 'react'
import { Header } from '../../components/Header/Header.jsx'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Footer, Main, SectionBanner } from '../../components/index.js'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts.jsx'
import './Home.css'
export const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <SectionBanner />
    <main>
      <Main />
      <ContainerProducts  />
      < Footer />

    </main>
    </>
  )
}
