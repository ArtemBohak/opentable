import ImageSvg from "@/assets/ImageSvg";
import React, { FC } from "react";

type Props = {
  animationDuration: string;
  animationDelay: string;
};

const RestaurantCardLoader: FC<Props> = ({
  animationDelay,
  animationDuration,
}) => {
  return (
    <div
      className="flex pb-5 animate-pulse"
      style={{
        animationDelay: animationDelay,
        animationDuration: animationDuration,
      }}
    >
      <div className="w-44 h-36 rounded relative">
        <ImageSvg />
      </div>
      <div className="pl-5">
        <div className="bg-gray-300 mb-1 h-6 rounded-sm w-32" />
        <div className="flex mb-1 items-start">
          <div className="py-1">
            <div className="bg-gray-300 h-4 rounded-sm w-36" />
          </div>
        </div>
        <div className="mb-9">
          <div className="bg-gray-300 mr-4 h-4 rounded-sm w-40" />
        </div>
        <div className="bg-gray-300 h-4 rounded-sm w-40" />
      </div>
    </div>
  );
};

export default RestaurantCardLoader;
