import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUserName } from "../user/UserSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-6xl mx-auto my-28 px-4 sm:px-6 lg:px-8 space-y-8">
      <Link to="/menu" className="text-sm text-orange-500 hover:underline">
        &larr; Back to menu
      </Link>
      <h2 className="font-semibold uppercase">Your cart, {username}</h2>

      <ul className="space-y-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center border-t pt-4 mt-6 space-y-4 sm:space-y-0">
        <Link
          to="/order/new"
          className="px-4 py-2 text-center w-full sm:w-auto text-white bg-orange-500 hover:bg-orange-600 rounded-md"
        >
          Order T-Shirts
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-2 w-full sm:w-auto text-center text-red-600 border border-red-600 rounded-md hover:bg-red-100"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
