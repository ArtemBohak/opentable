import RestaurantCard from "./components/RestaurantCard";
import SideSeachBar from "./components/SideSeachBar";
import Header from "./components/Header";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideSeachBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
