import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice";
function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(deleteItem(id))}
        className=" px-1 py-1 text-center w-full text-white bg-red-500
      hover:bg-red-600 rounded-md text-xs"
      >
        Delete from cart
      </button>
    </div>
  );
}

export default DeleteItem;
