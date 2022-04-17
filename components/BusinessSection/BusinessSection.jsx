import React from 'react';


const BusinessSection = ({title, children, ...rest}) => {
  return (
      <section className='business-section--wrapper' {...rest}>
          <h2 className='business-section--title'>{title}</h2>
          <div className='business-section--content-container'>
            {children}
          </div>
      </section>
  )
}

export default BusinessSection;