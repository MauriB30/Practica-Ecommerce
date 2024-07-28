export const initialState = [];

export function cartReducer(state, action) {
   switch (action.type) {
      case 'ADD_TO_CART':
         const productIncartIndex = state.findIndex(
            (item) => item.id === action.item.id
         );

         if (productIncartIndex !== -1) {
            const newCart = [...state];
            newCart[productIncartIndex].quantity += 1;
            return [...newCart];

         } else {
            const newItem = {
               ...action.item,
               quantity: action.item.quantity || 1
            };
            return [...state, newItem];
         }

      case 'REMOVE_FROM_CART':
         const productIndex = state.findIndex((item) => item.id === action.id);

         if (state[productIndex].quantity === 1 || action.deleteProduct) {
            return state.filter((item) => item.id !== action.id);

         } else {
            const newCart = [...state];
            newCart[productIndex].quantity -= 1;
            return [...newCart];
         }

      case 'CLEAR_CART':
         return [];

      default:
         return state;
   }
}
