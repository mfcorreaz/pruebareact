
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import MiCarrito from './components/MiCarrito';
import MyProvider from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    const mensajeBienvenida = "Bienvenidos a"

  return (
    <>
    <MyProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
            <Route path='/home' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
            {/* Paso el estado cantidadProductosEnCarrito para que se pueda utilizar el dato dentro del componente y también paso la función con la que se puede modificar para que pueda ser modificable dentro del mismo*/}
            <Route path='/producto/:nombre' element={<ItemDetailContainer/>} />
            <Route path='/categoria/:categoryName' element={<Category />} />
            <Route path='/miCarrito' element={<MiCarrito />} />
          </Routes>
        </BrowserRouter>
    </MyProvider>
   
      
    </>
  );
}

export default App;
