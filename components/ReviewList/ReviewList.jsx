import React from 'react'


const MAX_REVIEWS = 5;

export default function ReviewItem({reviews}) {
  return (
    <div className='review-container'>
      <ul>
        {reviews.map((review, index)=>{
            if (index === MAX_REVIEWS) return;
            return(
              <li key={index}>
                <h3>{review.user.name}</h3>
                <p>{review.text}</p>
              </li>
            )
        })}
      </ul>
      </div>
  )
}
