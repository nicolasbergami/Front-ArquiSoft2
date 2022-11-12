
import './App.css';
import { NavBar } from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { CartProvider } from './context/CartContext';
import Footer from './Components/Footer';
import Contacto from './Components/Contacto';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />

    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
