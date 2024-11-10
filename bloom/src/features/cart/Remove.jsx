import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function Remove({ id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(deleteItem(id))}
        className="text-red-500 hover:text-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default Remove;
