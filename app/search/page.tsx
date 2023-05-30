import SideSearchBar from "./components/SideSearchBar";
import Header from "./components/Header";
import RestaurantCardList from "./components/RestaurantCardList";
import {
  fetchRestaurantsByParams,
  fetchCuisines,
  fetchLocations,
} from "@/prisma/PrismaClient";
import { ContextType } from "app/interfaces/PageTypes";
import { PRICE } from "@prisma/client";
import HeaderLoader from "./loaders/HeaderLoader";
import SideSearchBarLoader from "./loaders/SideSearchBarLoader";
import RestaurantCardListLoader from "./loaders/RestaurantCardListLoader";

interface PageProps extends ContextType {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}

const Search = async ({ searchParams }: PageProps) => {
  const city = searchParams.city;
  const cuisine = searchParams.cuisine;
  const price = searchParams.price;

  const searchDryParams: any = {
    city: city,
    cuisine: cuisine,
    price: price,
  };

  if (searchDryParams.length !== 0) {
    const locationsPromise = fetchLocations();
    const cuisinesPromise = fetchCuisines();
    const restaurantsPromise = fetchRestaurantsByParams(searchDryParams);
    const [locations, cuisines, restaurants] = await Promise.all([
      locationsPromise,
      cuisinesPromise,
      restaurantsPromise,
    ]);
    if (restaurants.length === 0) {
      searchDryParams.city = undefined;
    }

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
  } else {
    const locationsPromise = fetchLocations();
    const cuisinesPromise = fetchCuisines();
    const restaurantsPromise = fetchRestaurantsByParams(searchDryParams);
    const [locations, cuisines, restaurants] = await Promise.all([
      locationsPromise,
      cuisinesPromise,
      restaurantsPromise,
    ]);
    if (restaurants.length === 0) {
      searchDryParams.city = undefined;
    }

    return (
      <div className="flex py-4 m-auto w-3/4 items-start">
        <SideSearchBar
          searchParams={searchDryParams}
          locations={locations}
          cuisines={cuisines}
        />
        <h2 className="text-lg mx-auto">No restaurants found</h2>
      </div>
    );
  }
};

export default Search;
