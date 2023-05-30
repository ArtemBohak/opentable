import React from "react";
import Header from "app/HomePageComponents/Header/Header";
import RestaurantCardsLoader from "app/HomePageComponents/RestaurantCards/Loaders/RestaurantCardsLoader";

const HomePageLoading = () => {
  return (
    <>
      <Header />
      <RestaurantCardsLoader />
    </>
  );
};

export default HomePageLoading;
