import Header from "app/HomePageComponents/Header/Header";
import RestaurantCards from "app/HomePageComponents/RestaurantCards/RestaurantCards";
import { fetchRestaurants } from "@/prisma/PrismaClient";

const Home = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <RestaurantCards restaurants={restaurants} />
    </>
  );
};

export default Home;
