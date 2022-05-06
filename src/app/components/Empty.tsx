import React from 'react'

import './../styles/empty.css'
import { EmptyProps } from './../utilities/interfaces'

const Empty = ({ title, message }: EmptyProps) => {
  return (
    <div className='empty'>
      <div className='empty__border'>
        <div className='empty__info'>
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export { Empty }
