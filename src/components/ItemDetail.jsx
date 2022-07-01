import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ItemDetail({item}) {
    const {id, imgURL, nombre, descripcion, stock, category} = item
    const [mostrarItemCount, onAdd] = useState(true)

    return (
      <>
      <div className="item-detail">
          <img src={imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
          <div>
              <div className="item-header">
                <h6 className="card-title text-secondary">Item #: {id}</h6>
                <Link to={`/categoria/${category}`}>
                  <h6 className="card-title">{(category)}</h6>
                </Link>
              </div>
              <div className="item-detail-body">
                <h5 className="card-title">{(nombre)}</h5>
                <p className="card-text ">{descripcion}</p>
              </div>  
              <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} onAdd={onAdd}/>
              <Link to="/miCarrito" className='btn btn-primary'>Ir al carrito</Link>
          </div>
      </div>
      </>
    )
}

export default ItemDetail