import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiTshirt";
import { useSelector } from "react-redux";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    id: 1,
    imageUrl: "http://localhost:3008/bloom/tshirts-1.jpg",
    name: "Everyday Essentials",
    quantity: 1,
    unitPrice: 78,
    totalPrice: 78,
  },
  {
    id: 2,
    imageUrl: "http://localhost:3008/bloom/tshirts-2.jpg",
    name: "Timeless Classic",
    quantity: 1,
    unitPrice: 70,
    totalPrice: 70,
  },
  {
    imageUrl: "http://localhost:3008/bloom/tshirts-3.jpg",
    id: 3,
    name: "Casual Comfort",
    quantity: 1,
    unitPrice: 73,
    totalPrice: 73,
  },
  {
    id: 4,
    imageUrl: "http://localhost:3008/bloom/tshirts-4.jpg",
    name: "Simply Stylish",
    quantity: 2,
    unitPrice: 76,
    totalPrice: 152,
  },
  {
    id: 5,
    imageUrl: "http://localhost:3008/bloom/tshirts-5.jpg",
    name: "Vibe Check",
    quantity: 1,
    unitPrice: 68,
    totalPrice: 68,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const username = useSelector((state) => state.user.username);
  const cart = fakeCart;
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md my-28">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            defaultValue={username}
            type="text"
            name="customer"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label
            htmlFor="priority"
            className="ml-2 block text-sm text-gray-700"
          >
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
