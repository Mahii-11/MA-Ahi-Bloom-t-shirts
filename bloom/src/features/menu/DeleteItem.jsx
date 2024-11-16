import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice";
function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(deleteItem(id))}
        className="px-3 py-1 text-center w-full text-white bg-red-500
      hover:bg-red-600 rounded-full text-xs"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteItem;
