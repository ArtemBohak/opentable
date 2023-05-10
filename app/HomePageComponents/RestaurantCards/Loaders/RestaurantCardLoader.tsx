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
      className="w-64 h-72 m-3 rounded overflow-hidden border animate-pulse"
      style={{
        animationDelay: animationDelay,
        animationDuration: animationDuration,
      }}
    >
      <div className="bg-gray-300 relative w-full h-36">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-512 -256 1600 1600">
          <path
            fill="rgb(156 163 175)"
            d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
          />
        </svg>
      </div>
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
