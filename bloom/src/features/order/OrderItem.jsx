import { formatCurrency } from "../../utitlis/help";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <p className="text-lg font-medium">
          <span className="text-indigo-500 font-semibold">{quantity}×</span>{" "}
          {name}
        </p>
      </div>
      <p className="text-lg font-semibold text-indigo-500">
        {formatCurrency(totalPrice)}
      </p>
    </li>
  );
}

export default OrderItem;
