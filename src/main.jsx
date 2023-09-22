import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter es el componente que nos permite definir las rutas de nuestra aplicación
  <BrowserRouter>  
      <Routes> {/* Routes es el componente que nos permite definir las rutas de nuestra aplicación */}
      <Route path="/" element={<Home />}> {/* Nos lleva a la página de inicio  */}
      </Route>
      AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc
    </Routes>
  </BrowserRouter>
)
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc

// https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&langRestrict=es&key=AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc

// https://www.googleapis.com/books/v1/volumes?q="Harry Potter"&langRestrict=es&maxResults=10&key=      AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc

// https://www.googleapis.com/books/v1/volumes?q=intitle:"título del libro"&langRestrict=es&maxResults=10&key=      AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc

// https://www.googleapis.com/books/v1/volumes?q=intitle:"Harry Potter"&langRestrict=es&maxResults=10&key=      AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc

