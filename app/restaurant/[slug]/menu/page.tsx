import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuList from "./components/MenuList";

export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <MenuList />
      </div>
    </>
  );
}
