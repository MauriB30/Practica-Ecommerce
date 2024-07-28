import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import calculateTotal from "../../helpers/calculateTotal";
import { AuthContext } from "../../context/AuthContext";
import addProduct from "../../helpers/addProduct";


export default function Summary() {

  const { cartProducts, clearCart } = useContext(CartContext);
  const { totalProducts, totalPrice } = calculateTotal(cartProducts);
  const { openLogin } = useContext(AuthContext);
  const  { user, setUser } = useContext(AuthContext);

  function handleCheckout() {
    if (!user) {
      openLogin();
      return
    }
    addProduct(user,cartProducts,setUser);
    clearCart();
  }


  return (
    <div className=" border border-neutral-400 rounded p-5 flex flex-col  grow gap-10 h-fit">
        <h3 className="text-3xl self-start">Summary</h3>
        <div>
            <p className="text-2xl">Products: {totalProducts}</p>
            <p className="text-2xl">Total Price $ {totalPrice} </p>
        </div>
        <button onClick={handleCheckout} className="border-2 rounded bg-orange-50 active:bg-orange-100 text-2xl p-2">Proceed to Checkout</button>
    </div>
  )
}


