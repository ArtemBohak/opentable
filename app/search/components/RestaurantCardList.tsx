import { FC } from "react";
import { RestaurantCardType } from "../../interfaces/PageTypes";
import RestaurantCard from "./RestaurantCard";

type Props = {
  restaurants: RestaurantCardType[];
};

const RestaurantCardList: FC<Props> = ({ restaurants }) => {
  return (
    <div className="w-5/6">
      {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantCardList;
