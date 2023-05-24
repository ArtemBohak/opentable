import Stars from "@/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { Review } from "@prisma/client";
import React, { FC } from "react";

type Props = {
  review: Review;
};

const ReviewComponent: FC<Props> = ({ review }) => {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl">
              {review.first_name[0].toUpperCase()}
              {review.last_name[0].toUpperCase()}
            </h2>
          </div>
          <p className="text-center">
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <Stars reviews={[review]} />
            <p className="text-reg ml-3">
              {calculateReviewRatingAverage([review])}
            </p>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
