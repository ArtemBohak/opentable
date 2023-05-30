import React, { FC } from "react";
import ImageSvg from "../../../../assets/ImageSvg";

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
      className="w-64 h-72 m-3 rounded overflow-hidden border animate-pulse"
      style={{
        animationDelay: animationDelay,
        animationDuration: animationDuration,
      }}
    >
      <ImageSvg />
      <div className="p-1">
        <div className="bg-gray-300 my-1 w-5/6 h-5 rounded" />
        <div className="flex flex-col items-start">
          <div className="bg-gray-300 my-2.5 w-1/2 h-5 rounded" />
          <div className="bg-gray-300 my-2 w-3/4 h-5 rounded" />
        </div>
        <div className="bg-gray-300 mt-1 w-2/3 h-5 rounded" />
      </div>
    </div>
  );
};

export default RestaurantCardLoader;
