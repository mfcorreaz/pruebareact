import React from 'react'
import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import Loading from './Loading';

function Category() {
    const [arrayNfts, setArrayNfts] = useState([])
    const { categoryName } = useParams()

    const [loading, setLoading] = useState(false)

  
    useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        fetch("../nfts.json")
        .then(res => res.json())
        
        .then(json => setArrayNfts(json.filter(obj => {
          return obj.category === categoryName}))
          )
        .catch(err => console.error("Error al importar nfts.json:", err))
        .finally(setLoading(false))
      }, 2000)
    }, [categoryName])

    if(loading) {
      return (
        <Loading />
      )
    } else {      
      return (
      <>
        <div className='contenedor-encabezado'>
           <h2 className="categoryName">{primeraLetraAMayusc(categoryName)}</h2>
        </div>
        {arrayNfts != [] ? <ItemList arrayNfts={arrayNfts} /> : <div className="noDisplay"></div>}
      </>
      )
    }
  }

export default Category