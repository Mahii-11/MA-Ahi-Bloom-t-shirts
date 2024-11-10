import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as getMenuLoader } from "../../../src/features/menu/Menu";
import Home from "../../../src/ui/Home";
import AppLayout from "../../../src/ui/AppLayout";
import Cart from "../../../src/features/cart/Cart";
import CreateOrder, {
  action as formAction,
} from "../../../src/features/order/CreateOrder";
import Order, {
  loader as getOrderLoader,
} from "../../../src/features/order/Order";
import Error from "../../../src/ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
        loader: getMenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: formAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: getOrderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
