import "./beauty.css";
import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import HeroCard from "../heroCard/HeroCard";
import Hero from "../hero/Hero";
import Slogan from "../slogan/Slogan";
import Review from "./review/Review";
import ReviewList from "./reviewlist/ReviewList";

function Beauty() {
  const [responseMsg, setResponseMsg] = useState(false);
  const [productId, setProductId] = useState(0);
  const [showReviewListError, setShowReviewListError] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showAllProductReviews, setShowAllProductReviews] = useState(false);
  const [reviewListToDisplay, setReviewListToDisplay] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Initialize dataFromLocalStorage with localStorage data
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState(() => {
    const lstr = localStorage.getItem("products");
    return lstr ? JSON.parse(lstr) : [];
  });
  // Initialize reviewList with localStorage data
  const [reviewList, setReviewList] = useState(() => {
    const savedReviews = localStorage.getItem("productReviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const message = "Thank you for your review";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        if (dataFromLocalStorage > 0) {
          setBeautyProducts(dataFromLocalStorage);
        } else {
          setBeautyProducts(result);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    const filteredReviews = reviewList.filter((item) => item.id === id);
    setReviewListToDisplay(filteredReviews);
  };

  return (
    <>
      <HeroCard>
        <Hero image="beauty" />
        <Slogan />
      </HeroCard>
      <section className="content">
        <h1 className="heading">Beauty</h1>
        <div>
          <div className="news">
           
            {beautyProducts.map((data) => {  {/* Loop through beautyProducts data */}
              return (
                <div key={data.id} className="project-details">
                  <div className="item slug">
                    <img src={data.image} alt={`${data.title} picture`} />
                  </div>
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
                        No Review yet for this item! Click on the "Review
                        product" button to be the first reviewer.
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
                    {showReview && productId === data.id && (
                      <Review
                        data={data}
                        closeReview={closeReview}
                        postReview={postReview}
                      />
                    )}

                    {showAllProductReviews && productId === data.id && (
                      <div>
                        <ReviewList
                          data={reviewListToDisplay}
                          closeDialog={closeReview}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Beauty;
