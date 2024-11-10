import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utitlis/help";
import Footer from "../../ui/Footer";

function CartoverView() {
  const totalcartQuantity = useSelector(getTotalCartQuantity);
  const totalcartPrice = useSelector(getTotalCartPrice);

  if (!totalcartQuantity) return <Footer />;
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 md:p-3 bg-stone-200 text-gray-900 shadow-md z-10 ">
      <p className="flex space-x-4  font-semibold">
        <span>{totalcartQuantity} tshirts</span>
        <span>{formatCurrency(totalcartPrice)}</span>
      </p>
      <Link className="uppercase underline text-orange-600" to="/cart">
        Shopping cart
      </Link>
    </div>
  );
}

export default CartoverView;
