import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import CartoverView from "../features/cart/CartoverView";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll ">
        <main>
          <Outlet />
        </main>
        <CartoverView />
      </div>
    </div>
  );
}

export default AppLayout;
