import React from 'react'
import { Link } from 'react-router-dom'
import './item.css';

function Item({nft}) {
  const {imgURL, nombre, existentes,precio, stock, category} = nft
  return (
    <>
    <Link to={`/producto/${nombre}`}>
        <div className="contenedorPadre  " >
            <div className="card contenedorHijo  " >
                <img src={imgURL} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                  <h5 className="card-title">{"Tipo: " + (category)}</h5>
                  <p className="">{"Modelo: " + (nombre)}</p>
                  <p className=''>En stock: {stock}/{existentes}</p>
                  <p className=''>Precio $:  { precio}</p>
                  <p className="btn btn-danger">Ver más</p>
                </div>
              </div>
        </div>
    </Link>
    </>
  )
}

export default Item