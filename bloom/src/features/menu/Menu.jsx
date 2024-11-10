import { useLoaderData } from "react-router-dom";
import { getTshirt } from "../../services/apiTshirt";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  //console.log(menu);

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 my-28">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {menu.map((ts) => (
          <MenuItem ts={ts} key={ts.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  try {
    const menu = await getTshirt();
    return menu;
  } catch (error) {
    console.error("Failed to load t-shirts:", error);
    throw new Response("Failed to load t-shirts", { status: 500 });
  }
}

export default Menu;
