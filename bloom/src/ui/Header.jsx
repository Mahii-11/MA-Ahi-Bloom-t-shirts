import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 md:p-6 bg-gray-900 text-white shadow-md z-10 ">
      <div className="text-1xl md:text-1xl font-bold text-orange-500 mb-2 sm:mb-0">
        <Link to="/">Bloom T-Shirt</Link>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <SearchOrder />
      </div>
      <UserName />
    </header>
  );
}

export default Header;
