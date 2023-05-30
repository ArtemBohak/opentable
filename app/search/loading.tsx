import React from "react";
import HeaderLoader from "./loaders/HeaderLoader";
import RestaurantCardListLoader from "./loaders/RestaurantCardListLoader";
import SideSearchBarLoader from "./loaders/SideSearchBarLoader";

const LoadingSearchPage = () => {
  return (
    <>
      <HeaderLoader />
      <div className="flex py-4 m-auto w-3/4 gap-12 items-start">
        <SideSearchBarLoader />
        <RestaurantCardListLoader />
      </div>
    </>
  );
};

export default LoadingSearchPage;
