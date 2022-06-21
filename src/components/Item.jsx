import React from 'react'
import { Link } from 'react-router-dom'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
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
              {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
                  <h5 className="card-title">{"Tipo: " + primeraLetraAMayusc(category)}</h5>
                  <p className="">{"Modelo: " + primeraLetraAMayusc(nombre)}</p>
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