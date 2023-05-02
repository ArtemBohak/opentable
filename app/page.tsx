import Header from "./HomePageComponents/Header/Header";
import RestaurantCards from "./HomePageComponents/RestaurantCards/RestaurantCards";
import { fetchRestaurants } from "../prisma/PrismaClient";

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
