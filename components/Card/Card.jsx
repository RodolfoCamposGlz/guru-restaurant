import React from 'react'
import Link from 'next/link'
export default function Card({isViewed,business, onClick}) {
  return (
    <Link href={{pathname:'/business', query: {alias: business.alias }}}>
      <a onClick={onClick}>
        <div className='card--wrapper card--animated'>
          <img className='card--business-image' src={business.photos?.[0]}/>
          <div className='card--content'>
            <h2 className='card--name-title'>{business.name}</h2>
            <p>{business.location.formatted_address}</p>
            <p><span className='card--review-title'>Reviews:</span> {business.reviews?.length}</p>
            <p>{business.display_phone}</p>
          </div>
          {isViewed() && (
            <div>
              VIEWED
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}
