import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './review.css';

function Review({ data, closeReview, postReview }) {
  const [name, setName] = useState('Anonymous');
  const [reviewText, setReviewText] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Reviews field is required!');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload

    if (!reviewText.trim()) {
      setShowError(true);
      return;
    }
    
    // Pass review back to parent
    postReview({
      reviewId: uuid(),
      id: data.id,
      name,
      review: reviewText,
    });

    // Reset + close
    setName('');
    setReviewText('');
    setShowError(false);
    closeReview();
  };

  return (
    <div className='new-join'>
      <div className='join-form'>
        <form onSubmit={handleSubmit}>
          <span onClick={closeReview} className='close'>
            X (close)
          </span>
          <p className='review-title'>{data.title}</p>

          <label htmlFor='name'>Name: </label>
          <input
            name='name'
            id='name'
            type='text'
            placeholder='Type your review'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='review'>Reviews: *</label>
          {showError && <span className='formError'>{errorMsg}</span>}
          <textarea
            name='reviews'
            placeholder='Type your review'
            id='review'
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <br />
          <button type='submit' className='join-send'>
            Send Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Review;

// import React, { useState } from 'react';
// import './review.css';

// function Review({data, closeReview, postReview}) {
//   const [showError, setShowError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('Reviews field is required!');
//   return (
//     <div className='new-join'>
//     <div className='join-form'>
//         <form >
//             <span onClick={closeReview} className='close'>X (close)</span>
//             <p className='review-title'> {data.title}</p>
//             <label htmlFor='name'>Name: </label>
//             <input  name='name' id='name' type='text' />
//             <label htmlFor='review'>Reviews: </label>
//             {showError &&
//             <span className='formError'>{errorMsg}</span>
//             }
//             <textarea  name='reviews' id='review'></textarea> <br />
//             <button onClick={postReview(data.id)} className='join-send'>Send Review</button>
//         </form>

//     </div>
// </div>
//   )
// }

// export default Review
