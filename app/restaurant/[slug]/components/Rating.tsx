import { Review } from "@prisma/client";
import { FC } from "react";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import Stars from "@/components/Stars";

type Props = {
  reviews: Review[];
};

const Rating: FC<Props> = ({ reviews }) => {
  const reviewQuantity =
    reviews.length === 1
      ? `${reviews.length} review`
      : `${reviews.length} reviews`;

  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <div>
          <Stars reviews={reviews} />
        </div>
        <p className="text-reg ml-3">{calculateReviewRatingAverage(reviews)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviewQuantity}</p>
      </div>
    </div>
  );
};

export default Rating;
