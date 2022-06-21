import React from 'react'
import ItemCount from './ItemCount'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import { Link } from 'react-router-dom';

function ItemDetail({item, cantidadProductosEnCarrito, onAdd}) {
    const {id, imgURL, nombre, descripcion, stock, category} = item
    
    return (
      <>
      <div className="item-detail">
          <img src={imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
          <div>
              <div className="item-header">
                <h6 className="card-title text-secondary">Item #: {id}</h6>
                <Link to={`/categoria/${category}`}>
                    <h6 className="card-title text-secondary">{"Producto: " + primeraLetraAMayusc(category)}</h6>
                </Link>
              </div>
              <div className="item-detail-body">
                <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
                <p className="card-text ">{descripcion}</p>
              </div>  
              <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} cantidadProductosEnCarrito={cantidadProductosEnCarrito} onAdd={onAdd}/>
          </div>
      </div>
      </>
    )
}

export default ItemDetail