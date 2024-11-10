import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./UserSlice";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) return;
    dispatch(updateName(userName));
    navigate("/menu");
    setUserName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex justify-center items-center mt-11">
        <div className="bg-[url('/images/ts-bg.jpg')] bg-cover bg-center bg-no-repeat h-[450px] w-[800px] md:h-[300px] md:min-w-full rounded-lg shadow-lg filter brightness-75"></div>
      </div>
      <p className="mt-12  text-sm text-orange-600 md:text-base">
        (✿◠‿◠) Welcome! Please start by telling us your name:
      </p>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Your full name"
        className=" input w-72 placeholder:text-gray-600 bg-gray-100 hover:bg-gray-200 mt-8 px-1 md:px-4 py-1 rounded-md border text-gray-700 uppercase border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
      {userName && (
        <div className="mt-6">
          <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300">
            Start Ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
