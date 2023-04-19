import Link from "next/link";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "./components/MenuCard";
import MenuList from "./components/MenuList";

export default function RestaurantMenu() {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />
            <MenuList />
          </div>
        </div>
      </main>
    </main>
  );
}
