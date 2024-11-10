import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CreateUser2nd() {
  const username = useSelector((state) => state.user.username);
  return (
    <form>
      <div className=" flex justify-center items-center mt-11">
        <div className="bg-[url('/images/women.jpeg')] bg-cover bg-center bg-no-repeat h-[450px] w-[800px] md:h-[300px] md:min-w-full rounded-lg shadow-lg filter brightness-75"></div>
      </div>
      <p className="mt-12  text-sm text-orange-600 md:text-base">
        (✿◠‿◠) Welcome! Please start by telling us your name:
      </p>

      <div className="mt-6">
        <Link to="/menu">
          <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300">
            Continue ordering {username}
          </button>
        </Link>
      </div>
    </form>
  );
}

export default CreateUser2nd;
