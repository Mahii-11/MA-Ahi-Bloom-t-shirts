import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex pl-8 flex-col md:flex-row my-40  ">
      <div className="flex-col  p-6 md:p-8 ">
        <h1 className="text-1xl font-serif text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {error.data || error.message}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors duration-200"
        >
          &larr; Go Back
        </button>
      </div>
      <div className="mt-6 pl-8 bg-[url('/images/error.png')] bg-cover bg-center bg-no-repeat h-[70px] w-[100px] md:h-[90px]"></div>
    </div>
  );
}

export default Error;
