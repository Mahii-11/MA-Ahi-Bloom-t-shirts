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
    <li className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <img
        src={imageUrl}
        alt={name}
        className={` ${
          soldOut ? "opacity-10 grayscale" : ""
        }  w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-extrabold mb-3">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold">{formatCurrency(unitPrice)}</p>
          {isInCart && <DeleteItem id={id} />}
          {!isInCart && (
            <button
              onClick={handleAddToCart}
              className={`text-sm font-semibold px-1 py-1 rounded-full ${
                soldOut
                  ? "text-red-700 text-lg underline font-semibold"
                  : "bg-green-600 cursor-pointer hover:bg-green-700"
              }`}
            >
              {soldOut ? "Sold Out" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
      <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-heart-fill text-red-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 2C5.794 2 4 3.794 4 6c0 1.865 1.457 3.68 3.852 5.302C8.24 11.806 8 12.35 8 12.5c0 .15.24.694.148.823-.118.171-.341.277-.564.229-.795-.13-1.518-.377-2.214-.728C5.178 12.251 4 10.832 4 9c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.832-1.178 3.251-3.334 3.824-1.155.351-2.434.598-3.214.728-.223.048-.446-.058-.564-.229-.092-.129.148-.673.148-.823 0-.15-.24-.694-.148-.823C10.543 9.68 12 7.865 12 6c0-2.206-1.794-4-4-4z" />
        </svg>
      </div>
    </li>
  );
}

export default MenuItem;

/*  <li className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center p-4">
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
</li> */
