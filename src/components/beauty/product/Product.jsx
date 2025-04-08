import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import ReviewList from "../reviewlist/ReviewList";
import Review from "../review/Review";
import ProductImage from "../productimage/ProductImage";

function Product({
  data,
  productId,
  responseMsg,
  showReviewListError,
  toggleReview,
  seeAllReviews,
  showAllProductReviews,
  reviewListToDisplay,
  closeReview,
  postReview,
  showReview,
}) {
  const message = "Thank you for your review";
  return (
    <>
     <ProductImage data={data} />
      <div className="item details">
        {responseMsg && productId === data.id && (
          <p className="review-response">{message}</p>
        )}
        <h2>{data.title}</h2>
        <p>
          Price:
          {data.price}
        </p>
        {showReviewListError && productId === data.id && (
          <span className="no-review-error">
            No Review yet for this item! Click on the "Review product" button to
            be the first reviewer.
          </span>
        )}
        <p>
          <FaThumbsUp className="material-icons" id={data.id} />
          <span className="rating">{data.rating.count}</span>
          <span
            onClick={() => seeAllReviews(data.id)}
            id="{data.id}"
            className="all-review-link"
          >
            See all reviews
          </span>
        </p>
        <p>
          Description:
          {data.description}
        </p>
        <div className="join-proj">
          <span className="likes">
            <a
              onClick={() => toggleReview(data.id)}
              id={data.id}
              className="join-bt"
            >
              Review this product
            </a>
          </span>
        </div>

        {/* Review Product */}
        {showReview && productId === data.id && (
          <Review
            data={data}
            closeReview={closeReview}
            postReview={postReview}
          />
        )}

        {/* Review List */}
        {showAllProductReviews && productId === data.id && (
          <div>
            <ReviewList data={reviewListToDisplay} closeDialog={closeReview} />
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
