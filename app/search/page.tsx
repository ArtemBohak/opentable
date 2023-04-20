import RestaurantCard from "./components/RestaurantCard";
import SideSeachBar from "./components/SideSeachBar";
import Header from "./components/Header";

export default function Search() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideSeachBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
