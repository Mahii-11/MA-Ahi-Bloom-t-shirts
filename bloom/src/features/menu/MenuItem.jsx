import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utitlis/help";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";

function MenuItem({ ts }) {
  const { id, name, unitPrice, imageUrl, soldOut } = ts;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id: id,
      name,
      imageUrl,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center p-4">
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-40 object-cover rounded-lg mb-4  ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <p className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {name}
      </p>
      <div className="mt-auto">
        {!soldOut ? (
          <p className="text-sm font-bold text-green-600">
            {formatCurrency(unitPrice)}
          </p>
        ) : (
          <p className="text-sm font-semibold text-red-500">Sold out</p>
        )}
      </div>

      {isInCart && <DeleteItem id={id} />}
      {!soldOut && !isInCart && (
        <button
          onClick={handleAddToCart}
          className="px-1 py-1 text-center w-full  text-white bg-orange-500 hover:bg-orange-600 rounded-md text-xs"
        >
          Add to cart
        </button>
      )}
    </li>
  );
}

export default MenuItem;
