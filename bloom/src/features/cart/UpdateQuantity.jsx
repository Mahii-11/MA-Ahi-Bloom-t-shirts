import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantity({ id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="bg-blue-500 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        +
      </button>

      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="bg-red-500 text-white font-bold py-1 px-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
      >
        -
      </button>
    </div>
  );
}

export default UpdateQuantity;
