import Header from "./HomePageComponents/Header/Header";
import RestaurantCards from "./HomePageComponents/RestaurantCards/RestaurantCards";
import { Suspense } from "react";
import RestaurantCardsLoader from "./HomePageComponents/RestaurantCards/Loaders/RestaurantCardsLoader";

const Home = async () => {
  return (
    <>
      <Header />
      <Suspense fallback={<RestaurantCardsLoader />}>
        <RestaurantCards />
      </Suspense>
    </>
  );
};

export default Home;
