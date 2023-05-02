import React, { FC } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantCardType } from "../../interfaces/PageTypes";

type Props = {
  restaurants: RestaurantCardType[]
}

const RestaurantCards: FC<Props> = ({ restaurants }) => {
  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {restaurants.map((restaurant: RestaurantCardType) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantCards;
