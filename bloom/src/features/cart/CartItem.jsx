import { formatCurrency } from "../../utitlis/help";
import Remove from "./Remove";
import UpdateQuantity from "./UpdateQuantity";

function CartItem({ item }) {
  const { id, imageUrl, name, quantity, totalPrice, unitPrice } = item;
  return (
    <li className="flex flex-col sm:flex-row items-center sm:items-start p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={imageUrl}
        alt={name}
        className="w-full sm:w-20 h-20 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 ">Quantity: {quantity}</p>
        <p className="text-gray-800 font-semibold">
          {formatCurrency(totalPrice.toFixed(2))}
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0 space-y-2">
        <p className="text-sm text-gray-500">
          Unit Price: {formatCurrency(unitPrice.toFixed(2))}
        </p>
        <Remove id={id} />
        <UpdateQuantity id={id} />
      </div>
    </li>
  );
}

export default CartItem;
