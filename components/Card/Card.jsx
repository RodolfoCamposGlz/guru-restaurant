import React from 'react'
import Link from 'next/link'
import EyeIcon from '../../assets/icons/EyeIcon'
export default function Card({isViewed,business, onClick}) {
  return (
    <Link href={{pathname:'/business-detail', query: {alias: business.alias }}}>
      <a onClick={onClick}>
        <div className='card--wrapper card--animated'>
          <img alt='Business picture' className='card--business-image' src={business.photos?.[0]}/>
          <div className='card--content'>
            <h2 className='card--name-title'>{business.name}</h2>
            <p>{business.location.formatted_address}</p>
            <p><span className='card--sub-header-title'>Raiting:</span> {business.rating}</p>
            <p><span className='card--sub-header-title'>Reviews:</span> {business.review_count}</p>
            <p>{business.display_phone}</p>
          </div>
          {isViewed() && (
            <EyeIcon color="blue" className="card--viewed-icon"/>
          )}
        </div>
      </a>
    </Link>
  )
}
