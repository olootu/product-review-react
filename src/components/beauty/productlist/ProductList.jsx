import React, { useState, useEffect } from "react";
import Product from "../product/Product";
function ProductList({
  data,
  beautyProducts,
  setBeautyProducts
}) {
 
  const [responseMsg, setResponseMsg] = useState(false);
  const [productId, setProductId] = useState(0);
  const [showReviewListError, setShowReviewListError] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showAllProductReviews, setShowAllProductReviews] = useState(false);
  // Initialize reviewList with localStorage data
  const [reviewList, setReviewList] = useState(() => {
    const savedReviews = localStorage.getItem("productReviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  // const [beautyProducts, setBeautyProducts] = useState([]);

  const closeReview = () => {
    setShowReview(false);
    setShowAllProductReviews(false);
    setProductId(0);
  };

  // Function to add review to the list
  const addToReviews = (review) => {
    setReviewList((prev) => [...prev, review]);
  };

  // Sync reviewList with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("productReviews", JSON.stringify(reviewList));
  }, [reviewList]); // Only run this effect when reviewList changes

  // Posting the review
  const postReview = (res) => {
    setShowReview(false);
    setResponseMsg(true);
    setProductId(res.id);

    const findItem = beautyProducts.find((item) => item.id === res.id); // Find the product being reviewed
    if (findItem) {
      findItem.rating.count += 1; // Increment product's rating count

      const beautyProductsUp = beautyProducts.map((item) =>
        item.id === findItem.id ? findItem : item
      ); // Update beautyProducts array

      setBeautyProducts(beautyProductsUp);
      localStorage.setItem("products", JSON.stringify(beautyProductsUp));

      // Add the review to the list
      addToReviews(res);
    } else {
      console.log("No item found");
    }
  };

  const toggleReview = (id) => {
    setShowReview((prev) => !prev); // toggle showReview
    setProductId(id); // set the product ID
    setShowAllProductReviews(false); // hide all reviews section
    setResponseMsg(false);
  };

  const seeAllReviews = (id) => {
    setShowAllProductReviews(true);
    setProductId(id);
    setResponseMsg(false);
    setShowReview(false);
  };

  return (
    <div className="project-details">
      <Product
        data={data}
        productId={productId}
        responseMsg={responseMsg}
        showReviewListError={showReviewListError}
        toggleReview={toggleReview}
        seeAllReviews={seeAllReviews}
        showAllProductReviews={showAllProductReviews}
        closeReview={closeReview}
        reviewList={reviewList}
        showReview={showReview}
        postReview={postReview}
      />
    </div>
  );
}

export default ProductList;
