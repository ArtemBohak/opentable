import { Review } from "@prisma/client";
import React, { FC } from "react";
import ReviewComponent from "./Review";

type Props = {
  reviews: Review[];
};

const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <div>
      {reviews.length ? (
        <>
          <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
            What people are saying
          </h1>
          {reviews.map((review) => (
            <ReviewComponent key={review.id} review={review} />
          ))}
        </>
      ) : (
        <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
          No reviews found
        </h1>
      )}
    </div>
  );
};

export default Reviews;
