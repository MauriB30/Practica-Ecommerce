import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


export default function ProductCard({ product, showProduct }) {

   const { addProduct } = useContext(CartContext)
   
   return (
      <div className='bg-white w-60 p-2 border rounded flex flex-col items-center justify-around gap-2 drop-shadow-xl'>
         <div onClick={() => showProduct(product)} className=" p-1 flex flex-col cursor-pointer">
            <img className="h-56 object-contain" src={product.image} />
            <h3 className="font-sans font-medium text-center ">{product.title}</h3>
         </div>
         <div className="flex items-center gap-3">
            <p className="font-sans font-medium  text-emerald-400">${product.price}</p>
            <button onClick={() => addProduct(product)} className="border-2 rounded p-1  bg-orange-50 active:bg-orange-100">Add to cart</button>
         </div>
      </div>
   );
}
