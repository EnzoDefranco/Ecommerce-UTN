import React from 'react'
import { Header } from '../../components/Header/Header.jsx'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Main, SectionBanner } from '../../components/index.js'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts.jsx'
export const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <SectionBanner />
    <Main />
    <ContainerProducts  />
    </>
  )
}
