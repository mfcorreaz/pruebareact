import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import './ItemListContainer.css'
import Loading from './Loading';

function ItemListContainer({greeting}) {
  const [arrayNfts, setArrayNfts] = useState([])
  const categoryName = "Productos"

  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      fetch("nfts.json")
        .then(res => res.json())
        .then(json => setArrayNfts(json))
        .catch(err => console.error("Error al importar nfts.json:", err))
        .finally(setLoading(false))
    }, 2000)
  }, [])


  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <div className='contenedor-encabezado'>
           
         
           {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
           <h2 className="categoryName">{primeraLetraAMayusc(categoryName)}</h2>
        </div>
        <ItemList arrayNfts={arrayNfts} />
      </>
    )
  }
}

export default ItemListContainer