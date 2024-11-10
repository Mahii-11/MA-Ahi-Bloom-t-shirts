import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiTshirt";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utitlis/help";

function Order() {
  const order = useLoaderData();
  const { id, priority, priorityPrice, orderPrice, estimatedDelivery, cart } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto p-6 sm:p-8 lg:p-12 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-gray-900 rounded-lg shadow-lg text-white space-y-6 mt-32 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-purple-400">
          Order #{id}
        </h2>
        {priority && (
          <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-red-500 text-white animate-pulse">
            Priority
          </span>
        )}
      </div>

      <div className="space-y-2 text-center sm:text-left">
        <p className="text-gray-300">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left! 🚀`
            : "Order should have arrived!"}
        </p>
        <p className="text-gray-400 text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="border-t border-gray-700 pt-4 space-y-2">
        {cart.map((item) => (
          <div
            key={item.pizzaId}
            className="flex justify-between text-sm sm:text-base"
          >
            <p className="text-gray-300">
              {item.name} x{item.quantity}
            </p>
            <p>{formatCurrency(item.totalPrice)}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4">
        <p className="flex justify-between text-sm sm:text-lg font-semibold">
          <span>Order Total:</span>
          <span>{formatCurrency(orderPrice)}</span>
        </p>
        <p className="flex justify-between text-sm sm:text-lg font-semibold">
          <span>To Pay on Delivery:</span>
          <span>{formatCurrency(orderPrice + priorityPrice)}</span>
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const orderdata = await getOrder(params.orderId);
  return orderdata;
}

export default Order;
