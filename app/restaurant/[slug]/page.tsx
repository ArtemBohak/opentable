import { fetchRestaurantBySlug } from "@/prisma/PrismaClient";
import { ContextType } from "app/interfaces/PageTypes";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

interface Props extends ContextType {
  params: { slug: string };
}

const RestaurantDetails = async (context: Props) => {
  const restaurant = await fetchRestaurantBySlug(context.params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews}/>
        <Description description={restaurant.description} />
        <Images name={restaurant.name} images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard params={context.params} />
      </div>
    </>
  );
};

export default RestaurantDetails;
