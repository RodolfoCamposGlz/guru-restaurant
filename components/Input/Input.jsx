import React from 'react'

export default function Input({value, onChange, ...rest}) {
  return (
    <input {...rest} value={value} className='input' onChange={onChange} />
  )
}
