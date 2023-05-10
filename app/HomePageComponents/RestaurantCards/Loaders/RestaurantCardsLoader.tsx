import React from "react";
import RestaurantCardLoader from "./RestaurantCardLoader";

const RestaurantCardsLoader = () => {
  function createEmptyCards() {
    let cards = [];
    for (let i = 1; i <= 12; i++) {
      cards.push(<RestaurantCardLoader animationDelay={`${i * 0.08}s`} animationDuration='2s' key={i} />);
    }

    return cards;
  }

  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {createEmptyCards()}
    </div>
  );
};

export default RestaurantCardsLoader;
