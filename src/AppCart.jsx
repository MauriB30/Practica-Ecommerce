import './app.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Profile from './pages/Profile';
import ProductsProvider from './context/ProductsContext';
import AuthProvider from './context/AuthContext';


function AppCart() {
   return (
      <CartProvider>
         <ProductsProvider>
            <AuthProvider>
               <div className='page'>
                  <Routes>
                     <Route path='/' element={ <Home /> } />
                     <Route path='/cart' element={ <Cart /> } />
                     <Route path='/category/:category' element={ <Home /> } />
                     <Route path='/profile' element={ <Profile /> } />
                  </Routes>
               </div>
            </AuthProvider>
         </ProductsProvider>
      </CartProvider>
   );
}

export default AppCart;
