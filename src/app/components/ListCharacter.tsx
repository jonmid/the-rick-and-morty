import React from 'react'

import './../styles/listCharacter.css'
import { Props } from './../utilities/interfaces'

const ListCharacter = ({ children }: Props) => {
  return <div className='listCharacter'>{children}</div>
}

export { ListCharacter }
