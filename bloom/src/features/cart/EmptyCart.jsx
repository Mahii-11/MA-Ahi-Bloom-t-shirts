import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-7 ">
      <div className="mb-6 animate-pulse text-orange-500">
        <FaTshirt size={50} />
      </div>
      <p className="text-2xl font-semibold text-gray-800 mb-4">
        Your cart is empty!
      </p>
      <p className="text-md text-gray-500 mb-8">
        Looks like you haven’t added any T-shirts yet. Check out our collection
        and find your style!
      </p>
      <Link
        to="/menu"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-colors duration-300"
      >
        Start Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
