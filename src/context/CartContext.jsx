import { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cartReducer';

export const CartContext = createContext();

export default function CartProvider({ children }) {
   const [cartProducts, dispatch] = useReducer(cartReducer, initialState);

   const addProduct = (product) => {
      dispatch({ type: 'ADD_TO_CART', item: product });
   }

   const removeProduct = (id, deleteProduct = false) => {
      dispatch({ type: 'REMOVE_FROM_CART', id, deleteProduct });
   }

   const clearCart = () => {
      dispatch({type: 'CLEAR_CART'})
   }

   return <CartContext.Provider value={{cartProducts, addProduct, removeProduct, clearCart}}>{children}</CartContext.Provider>;
}
