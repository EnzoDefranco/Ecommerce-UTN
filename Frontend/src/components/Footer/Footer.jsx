import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>

    <div className="container footer-container">
                <div className="footer-section">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Mi cuenta</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            
                <div className="footer-section">
                    <h3>Información</h3>
                        <ul>
                            <li><a href="#">Acerca de nosotros</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
            
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Dirección: Calle, Buenos Aires, Argentina</p>
                        <p>Teléfono: +123456789</p>
                        <p>Email: tulibro@gmail.com</p>
                    </div>
                </div>
                <div className="bottom-bar">
                    <p>Todos los derechos reservados &copy; 2023 TuLibro</p>
            </div>
    </footer> 
  )
}
