import { useContext, useRef } from 'react';
import calculatePrize from '../../helpers/calculatePrize';
import { ProductsContext } from '../../context/ProductsContext';

export default function OrderItem({ item }) {
   const textRef = useRef(null);
   const { addReview } = useContext(ProductsContext);

   function handleSubmit() {
      addReview(item,textRef.current.value);
   }

   return (
      <div className='flex flex-col'>
         <div className='item-card grid grid-cols-7 place-items-center  p-4 mb-3 text-lg'>
            <img className='size-36 rounded drop-shadow-lg p-2 bg-white' src={item.image} />
            <p className='col-span-3 justify-self-start ml-1'>{item.title}</p>
            <p>$ {item.price}</p>
            <div className='flex items-center justify-end w-full space-x-4'>
               <p>Total $ {calculatePrize(item.quantity, item.price)}</p>
            </div>
         </div>
         <div className='flex gap-5'>
            <textarea ref={textRef} className='h-20 border-2 rounded resize-none ml-10 basis-2/4 focus:outline-orange-500' type="text" placeholder='Add a review' />
            <button onClick={handleSubmit} className='bg-orange-500 h-20 w-20 text-white rounded p-2 active:bg-orange-300'>Send</button>
         </div>
      </div>
   );
}
