import React from 'react';
import Summary from './Summary';
import CartList from './CartList';

export default function CartContent({ cartProducts, clearCart }) {
   return (
      <div className='cart-page min-h-screen bg-gradient-to-r from-slate-50 to-orange-200'>
         <div className='cart-container m-auto p-3'>
            <div className='cart-header flex justify-between py-3'>
               <h1 className='cart-title text-2xl font-normal underline underline-offset-3'>
                  Shopping Cart
               </h1>
               <button
                  onClick={clearCart}
                  className='empty-cart-button bg-orange-500 text-white rounded p-2 active:bg-orange-300'
               >
                  Empty Cart
               </button>
            </div>
            <div className='flex gap-3'>
               {cartProducts.length === 0 ? (
                  <p className='m-auto text-2xl'>Your cart is empty</p>
               ) : (
                  <>
                     <CartList />
                     <Summary />
                  </>
               )}
            </div>
         </div>
      </div>
   );
}
