import React from 'react'
import { Link } from 'react-router-dom'
import logo4 from '../img/Logo4.png'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar({cantidadProductosEnCarrito}) {
    return (
    <>
        <nav className="navbar navbar-expand-lg Nave">
          <Link to={"/"} className="navbar-brand"><img src={logo4} alt="Logo The Stroke" />Merchandising</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/"} className="nav-link active text-white">Home <span className="sr-only">(current)</span></Link>
              {/* Esta etiqueta <a> no es utilizada para navegación por lo que no la cambiaré a Link */}
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link to={"/categoria/Disco"}>Disco</Link>
                <Link to={"/categoria/Remeras"}>Remera</Link>
                <Link to={"/categoria/Posters"}>Poster</Link>
              </div>
            </div>
            <CartWidget cantidadProductosEnCarrito={cantidadProductosEnCarrito}/>
          </div>
        </nav>
    </>
    )
}

export default NavBar