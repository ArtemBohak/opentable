import { FC } from "react";
import Link from "next/link";
import { RestaurantCardType } from "../../interfaces/PageTypes";
import Image from "next/image";
import Price from "app/HomePageComponents/components/Price";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import Stars from "@/components/Stars";

type Props = {
  restaurant: RestaurantCardType;
};

const RestaurantCard: FC<Props> = ({ restaurant }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating >= 4) return "Awesome";
    if (rating < 4 && rating >= 3) return "Good";
    if (rating < 3 && rating > 0) return "Average";
    return "";
  };

  return (
    <div className="border-b flex pb-5">
      <div className="w-44 h-36 rounded relative">
        <Image
          src={restaurant.main_image}
          alt={`${restaurant.name}_photo`}
          fill
          className="object-cover"
          // quality={40}
          sizes="(max-width: 768px) 60vw,
            (max-width: 1280px) 80vw,
            100vw"
        />
      </div>
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="py-1">
            <Stars width={13} reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price}></Price>
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
