import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuList from "./components/MenuList";
import { fetchMenuItems } from "@/prisma/PrismaClient";

type Props = {
  params: { slug: string };
};

const RestaurantMenu = async ({ params }: Props) => {
  const restaurantMenu = await fetchMenuItems(params.slug);
  // console.log(restaurantMenu);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <MenuList restaurantMenu={restaurantMenu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
