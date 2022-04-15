import React from 'react'
import Link from 'next/link'
export default function Card({isViewed,business, onClick}) {
  console.log("isViewed", isViewed())
  return (
    <Link href={{pathname:'/business', query: {alias: business.alias }}} className='card--wrapper'>
      <a onClick={onClick}>
        <img className='card--business-image' src={business.photos?.[0]}/>
        <div>{business.name}</div>
        <div>{business.location.formatted_address}</div>
        <div>{business.reviews?.length}</div>
        <div>{business.display_phone}</div>
        {isViewed() && (
          <div>
            VIEWED
          </div>
        )}
      </a>
    </Link>
  )
}
