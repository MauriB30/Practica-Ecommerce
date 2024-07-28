import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import AuthModal from '../components/common/AuthModal';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CartContent from '../components/cart/CartContent';

export default function Cart() {
   const { cartProducts, clearCart } = useContext(CartContext);

   return (
      <>
         <Header />
         <CartContent cartProducts={cartProducts} clearCart={clearCart} />
         <AuthModal />
         <Footer />
      </>
   );
}
