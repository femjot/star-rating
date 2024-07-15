import React, { useState } from "react";
import "./star-rating.styles.css";

const StarRating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const maxRating = 5;

  const setCurrentRatingClickHandler = (ratingValue: number) => {
    ratingValue === currentRating
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);
  };

  return (
    <div className="star-rating-container">
      currentRating: {currentRating}
      {[...Array(maxRating)].map((_, idx) => {
        const ratingValue: number = idx + 1;
        return (
          <p
            key={idx}
            onClick={() => setCurrentRatingClickHandler(ratingValue)}
            className={`star ${ratingValue <= currentRating ? "active" : ""}`}
          >
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
