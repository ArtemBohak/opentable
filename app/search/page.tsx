import SideSearchBar from "./components/SideSearchBar";
import Header from "./components/Header";
import RestaurantCardList from "./components/RestaurantCardList";
import {
  fetchRestaurantsByLocation,
  fetchCuisines,
  fetchLocations,
  fetchRestaurantsByCuisine,
} from "../../prisma/PrismaClient";
import { ContextType } from "../interfaces/PageTypes";
import { PRICE } from "@prisma/client";

interface PageProps extends ContextType {
  searchParams: { city: string; cuisine?: string; price?: PRICE };
}

const Search = async ({ searchParams }: PageProps) => {
  const city = searchParams.city;
  const cuisine = searchParams.cuisine;
  const price = searchParams.price;

  const searchDryParams = { city: city, cuisine: cuisine, price: price };

  if (city) {
    const restaurants = await fetchRestaurantsByLocation(city);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    return (
      <>
        <Header />
        {restaurants.length !== 0 ? (
          <div className="flex py-4 m-auto w-3/4 justify-between items-start">
            <SideSearchBar
              searchParams={searchDryParams}
              locations={locations}
              cuisines={cuisines}
            />
            <RestaurantCardList restaurants={restaurants} />
          </div>
        ) : (
          <div className="flex py-4 m-auto w-3/4 items-start">
            <SideSearchBar
              searchParams={searchDryParams}
              locations={locations}
              cuisines={cuisines}
            />
            <h2 className="text-lg mx-auto">No restaurants found</h2>
          </div>
        )}
      </>
    );
  } else if (cuisine) {
    const restaurants = await fetchRestaurantsByCuisine(cuisine);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    return (
      <>
        <Header />
        {restaurants.length !== 0 ? (
          <div className="flex py-4 m-auto w-3/4 justify-between items-start">
            <SideSearchBar
              searchParams={searchDryParams}
              locations={locations}
              cuisines={cuisines}
            />
            <RestaurantCardList restaurants={restaurants} />
          </div>
        ) : (
          <div className="flex py-4 m-auto w-3/4 items-start">
            <SideSearchBar
              searchParams={searchDryParams}
              locations={locations}
              cuisines={cuisines}
            />
            <h2 className="text-lg mx-auto">No restaurants found</h2>
          </div>
        )}
      </>
    );
  }
};

export default Search;
