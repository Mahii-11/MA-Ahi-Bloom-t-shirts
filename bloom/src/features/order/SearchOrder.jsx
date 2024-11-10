import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="🔍 Search order"
        className="px-1 md:px-4 py-1 rounded-md border text-gray-700 uppercase border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
    </form>
  );
}

export default SearchOrder;
