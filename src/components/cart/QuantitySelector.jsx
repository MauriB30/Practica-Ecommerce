import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function QuantitySelector({ item }) {
    const [currentQuantity, setCurrentQuantity] = useState(item.quantity);
    const { addProduct, removeProduct } = useContext(CartContext)

    function handleIncrement() {
        setCurrentQuantity(currentQuantity + 1);
        addProduct(item)
    }

    function handleDecrement() {
        if (currentQuantity === 1) {
            return
        }
        setCurrentQuantity(currentQuantity - 1);
        removeProduct(item.id)
    }
    
  return (
    <div className="flex gap-4 border border-orange-500 text-2xl rounded">
        <button onClick={handleDecrement} className="border border-orange-500 border-y-0 border-l-0 text-orange-500 font-bold px-3">-</button>
        <span className=" text-slate-500">{currentQuantity}</span>
        <button onClick={handleIncrement} className="border border-orange-500 border-y-0 border-r-0  text-orange-500 font-bold px-3">+</button>
    </div>
  )
}
