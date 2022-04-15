import React from 'react'
import Link from 'next/link'
export default function Card({business}) {
  console.log("business", business)
  return (
    <Link href={{pathname:'/business', query: {alias: business.alias }}} className='card--wrapper'>
      <a>
        <img className='card--business-image' src={business.photos?.[0]}/>
        <div>{business.name}</div>
        <div>{business.location.formatted_address}</div>
        <div>{business.reviews?.length}</div>
        <div>{business.display_phone}</div>
      </a>
    </Link>
  )
}
