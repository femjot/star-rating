import React, { useState } from "react";
import "./star-rating.styles.css";

const StarRating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const maxRating = 5;

  const handleStarClick = (ratingValue: number) => {
    ratingValue === currentRating
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);
  };

  const handleStarMouseOver = (ratingValue: number) => {
    setHoveredRating(ratingValue);
  };

  const handleStarContainerMouseOut = () => {
    setHoveredRating(0);
  };

  return (
    <div
      className="star-rating-container"
      onMouseOut={() => handleStarContainerMouseOut()}
    >
      currentRating: {currentRating}
      hoverRating: {hoveredRating}
      {[...Array(maxRating)].map((_, idx) => {
        const ratingValue: number = idx + 1;
        return (
          <p
            key={idx}
            onClick={() => handleStarClick(ratingValue)}
            onMouseOver={() => handleStarMouseOver(ratingValue)}
            className={`star ${ratingValue <= (hoveredRating || currentRating) ? "active" : ""}`}
          >
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
