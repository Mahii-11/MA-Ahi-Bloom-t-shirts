import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import CreateUser2nd from "../features/user/CreateUser2nd";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-36 md:my-28  px-4 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-2xl">
        Express Yourself with Ahi Bloom:
        <br />
        <span className="text-orange-500">
          Where Every T-Shirt Blooms with Style!
        </span>
      </h1>
      {username === "" ? <CreateUser /> : <CreateUser2nd />}
    </div>
  );
}

export default Home;
