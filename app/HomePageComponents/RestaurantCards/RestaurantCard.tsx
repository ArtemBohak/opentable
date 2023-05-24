import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Stars from "@/components/Stars";
import { RestaurantCardType } from "app/interfaces/PageTypes";
import Price from "app/HomePageComponents/components/Price";

type Props = {
  restaurant: RestaurantCardType;
};

const RestaurantCard: FC<Props> = ({ restaurant }) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <div className="overflow-hidden relative w-full h-36">
          <Image
            src={restaurant.main_image}
            alt={`${restaurant.name}_photo`}
            className="object-cover"
            fill
            // quality={20}
            sizes="(max-width: 768px) 60vw,
            (max-width: 1280px) 80vw,
            100vw"
          />
        </div>
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="relative top-1.5">
              <Stars reviews={restaurant.reviews} />
            </div>
            <p className="ml-2">
              {restaurant.reviews.length === 1
                ? `${restaurant.reviews.length} review`
                : `${restaurant.reviews.length} reviews`}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
