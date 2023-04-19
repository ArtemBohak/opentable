import React, { FC } from "react";
import RestaurantCard from "./RestaurantCard";

type Props = {};

const RestaurantCards: FC = () => {
  return (
    <div>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default RestaurantCards;
