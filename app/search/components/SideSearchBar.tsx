import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

type Props = {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city: string; cuisine?: string; price?: PRICE };
};

const SideSearchBar: FC<Props> = ({ locations, cuisines, searchParams }) => {
  return (
    <div>
      <div className="hi w-full">
        <div className="border-b pb-4 flex flex-col">
          <h1 className="mb-2 font-semibold">Region</h1>
          {locations.map((location) => (
            <Link
              key={location.id}
              className={
                location.name === searchParams.city
                  ? "capitalize font-semibold text-red-400 text-reg"
                  : "capitalize font-light text-reg"
              }
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
            >
              {location.name}
            </Link>
          ))}
        </div>
        <div className="border-b pb-4 mt-3 flex flex-col">
          <h1 className="mb-2 font-semibold">Cuisine</h1>
          {cuisines.map((cuisine) => (
            <Link
              key={cuisine.id}
              className={
                cuisine.name === searchParams.cuisine
                  ? "capitalize font-semibold text-red-400 text-reg"
                  : "capitalize font-light text-reg"
              }
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
            >
              {cuisine.name}
            </Link>
          ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2 font-semibold">Price</h1>
          <div className="flex w-full">
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: searchParams.price },
              }}
              className="border text-reg font-light rounded-l px-3 py-1"
            >
              $
            </Link>
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: searchParams.price },
              }}
              className="border-r border-t border-b text-reg font-light px-3 py-1"
            >
              $$
            </Link>
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: searchParams.price },
              }}
              className="border-r border-t border-b text-reg font-light px-3 py-1 rounded-r"
            >
              $$$
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearchBar;
