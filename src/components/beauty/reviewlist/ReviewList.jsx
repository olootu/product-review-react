import React from "react";
import "./reviewlist.css";
import ReviewItem  from '../../beauty/reviewitem/ReviewItem';

function ReviewList({ reviewList, closeDialog, productId }) {

  const filteredReview = reviewList.filter(review => review.id === productId)
  return (
    <div className="new-join list pr-details">
      <div className="join-form">
        <span onClick={closeDialog} className="close">
          X (close)
        </span>
        {
          filteredReview.length > 0 ? (
            filteredReview.map((rv) => {
              return (
            <ReviewItem item={rv} key={rv.reviewId} />
            
            );
            })
          ) : (
            <span className="no-review-error">
              No Review yet for this item! Click on the "Review product" button
              to be the first reviewer.
            </span>
          )
        }
      </div>
    </div>
  );
}

export default ReviewList;
