import styles from "./page.module.css";
import Header from "./HomePageComponents/Header/Header";
import RestaurantCards from "./HomePageComponents/RestaurantCards/RestaurantCards";
import { PrismaClient } from "@prisma/client";

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();
//   const restaurants = await prisma.restaurant.findMany();
//   console.log("Logging: ", restaurants);
//   return { props: { restaurants } };
// };

async function fetchRestaurants() {
  const prisma = new PrismaClient();
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
}

const Home = async () => {
  const restaurants = await fetchRestaurants()
  return (
    <>
      <Header />
      <RestaurantCards restaurants={restaurants} />
    </>
  );
};

export default Home;
