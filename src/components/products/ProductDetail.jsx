import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ReviewsContainer from "./ReviewsContainer";

export default function ProductDetail({ product, showProduct }) {  
  const { addProduct } = useContext(CartContext);

  if (!product) {
    return null;
  } 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-1/2 h-3/4 grid grid-cols-2  border-2 rounded border-orange-400 shadow-inner gap-2 bg-stone-200 p-5">
        <div className=" bg-stone-200 col-span-1 flex items-center justify-center">
          <img src={product.image} className="size-80 object-contain mix-blend-multiply" />
        </div>
        <div className="col-span-1 flex flex-col gap-4  p-4 bg-stone-200">
          <button onClick={() => showProduct(null)} className="self-end bg-white p-1 rounded">Back</button>
          <h2 className="uppercase">{product.category}</h2>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="font-light line-clamp-5 overflow-clip">{product.description}</p>
          <p className="text-2xl text-green-500 font-semibold">$ {product.price}</p>
          <div className="flex gap-3 ">
            <button onClick={() => addProduct(product)} className="bg-white p-2 rounded">ADD TO CART</button>
            <button className="bg-green-300 p-2 rounded">BUY NOW</button>
          </div>
        </div>
        <ReviewsContainer reviews={product.reviews} />
      </div>
    </div>
  
  )
}
