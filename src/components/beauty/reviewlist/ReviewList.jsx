import React from "react";
import "./reviewlist.css";
import ReviewItem from "../reviewitem/reviewItem";
ReviewItem

function ReviewList({ data, closeDialog }) {
  return (
    <div className="new-join list pr-details">
      <div className="join-form">
        <span onClick={closeDialog} className="close">
          X (close)
        </span>
        {
          data.length > 0 ? (
            data.map((rv) => {
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

          // @for(rv of data; track rv.uniqueId) {
          //  <app-review-list-item [eachReview]="rv"></app-review-list-item>
          //  <ReviewList  />
        }
      </div>
    </div>
  );
}

export default ReviewList;
