import React, { useCallback, useState } from "react";
import "./star-rating.styles.css";

const StarRating = ({ maxRating = 5 }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = useCallback(
    (ratingValue: number) => {
      ratingValue === currentRating
        ? setCurrentRating(0)
        : setCurrentRating(ratingValue);
    },
    [currentRating],
  );

  const handleStarMouseOver = useCallback((ratingValue: number) => {
    setHoveredRating(ratingValue);
  }, []);

  const handleStarContainerMouseOut = useCallback(() => {
    setHoveredRating(0);
  }, []);

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
