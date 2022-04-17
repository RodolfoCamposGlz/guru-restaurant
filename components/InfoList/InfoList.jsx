import React from 'react'

export default function InfoItem({info}) {
  return (
    <div className='info-list--wrapper'>
      {
        info.map((item, index)=> (
        <div key={index} className='info-list--content'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        ))
      }
    </div>

  )
}
