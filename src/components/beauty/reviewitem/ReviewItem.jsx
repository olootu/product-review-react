import React from 'react';
import './reviewItem.css';

function ReviewItem({item}) {
  return (
    <div className="rv-item">
    <p>Reviewed by:</p>
    <span>{item.name}</span>
    <p>Reviews:</p>
    <span>{item.review}</span>
</div>
  )
}

export default ReviewItem