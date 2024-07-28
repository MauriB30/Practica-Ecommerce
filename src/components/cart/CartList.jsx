import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../context/CartContext';

export default function CartList() {
   const { cartProducts } = useContext(CartContext);

   return (
      <div className='cart-list border border-neutral-400 rounded p-3 shadow-lg basis-3/4'>
        <div className='list-title mb-3 ml-4 text-2xl'>
            Products
        </div>
        {
         cartProducts.length > 0 ? (
            cartProducts.map(item => (
               <CartItem key={item.id} item={item}></CartItem>
            ))
         ) : (
            <p></p>
         )
        }
      </div>
   );
}




