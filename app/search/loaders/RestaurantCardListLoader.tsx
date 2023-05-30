import React from "react";
import RestaurantCardLoader from "./RestaurantCardLoader";

const RestaurantCardListLoader = () => {
  function createEmptyCards() {
    let cards = [];
    for (let i = 1; i <= 12; i++) {
      cards.push(
        <RestaurantCardLoader
          animationDelay={`${i * 0.08}s`}
          animationDuration="2s"
          key={i}
        />
      );
    }

    return cards;
  }

  return <div className='"w-5/6"'>{createEmptyCards()}</div>;
};

export default RestaurantCardListLoader;
