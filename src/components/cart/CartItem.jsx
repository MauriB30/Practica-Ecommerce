import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import QuantitySelector from './QuantitySelector';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import calculatePrize from '../../helpers/calculatePrize';

export default function CartItem({ item }) {
   const { removeProduct } = useContext(CartContext);

   return (
      <div className='item-card grid grid-cols-7 place-items-center  p-4 mb-3 text-lg'>
         <img className='size-36 rounded drop-shadow-lg p-2 bg-white' src={item.image} />
         <p className='col-span-3 justify-self-start ml-1'>{item.title}</p>
         <p>$ {item.price}</p>
         <QuantitySelector item={item} />
         <div className='flex items-center justify-end w-full space-x-4'>
            <p>Total $ {calculatePrize(item.quantity, item.price)}</p>
            <button
               onClick={() => removeProduct(item.id, true)}
               className='bg-orange-500 p-1 rounded text-white'
            >
               <DeleteForeverIcon
                  style={{ margin: 'auto', display: 'flex' }}
               ></DeleteForeverIcon>
            </button>
         </div>
      </div>
   );
}
