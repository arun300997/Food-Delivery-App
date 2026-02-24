import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    console.log("cart rendered");

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="flex text-center cart-container">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <div className="w-6/12 m-auto ">
            <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
            onClick={handleClearCart}>
                Clear Cart</button>
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;