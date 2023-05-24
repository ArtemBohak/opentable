import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
};

const SideSearchBar: FC<Props> = ({ locations, cuisines, searchParams }) => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border text-reg font-light rounded-l px-3 py-1",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border text-reg font-light px-2.5 py-1",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "border text-reg rounded-r font-light px-2 py-1",
    },
  ];

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
                  ? "capitalize font-semibold text-red-400 text-reg hover:text-red-400"
                  : "capitalize font-light text-reg hover:text-red-400"
              }
              href={{
                pathname: "/search",
                query:
                  searchParams.city === location.name
                    ? {
                        cuisine: searchParams?.cuisine,
                        price: searchParams?.price,
                      }
                    : { ...searchParams, city: location.name },
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
                  ? "capitalize font-semibold text-red-400 text-reg hover:text-red-400"
                  : "capitalize font-light text-reg hover:text-red-400"
              }
              href={{
                pathname: "/search",
                query:
                  searchParams.cuisine === cuisine.name
                    ? { city: searchParams?.city, price: searchParams?.price }
                    : { ...searchParams, cuisine: cuisine.name },
              }}
            >
              {cuisine.name}
            </Link>
          ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2 font-semibold">Price</h1>
          <div className="flex w-full">
            {prices.map((price) => (
              <Link
                key={price.price}
                href={{
                  pathname: "/search",
                  query:
                    searchParams.price === price.price
                      ? {
                          city: searchParams?.city,
                          cuisine: searchParams?.cuisine,
                        }
                      : { ...searchParams, price: price.price },
                }}
                className={price.className}
              >
                {price.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearchBar;
