import Header from "app/HomePageComponents/Header/Header";
import RestaurantCards from "app/HomePageComponents/RestaurantCards/RestaurantCards";
import { Suspense } from "react";
import RestaurantCardsLoader from "app/HomePageComponents/RestaurantCards/Loaders/RestaurantCardsLoader";
import { fetchRestaurants } from "@/prisma/PrismaClient";

const Home = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <Suspense fallback={<RestaurantCardsLoader />}>
        <RestaurantCards restaurants={restaurants} />
      </Suspense>
    </>
  );
};

export default Home;
