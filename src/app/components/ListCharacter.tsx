import React from 'react'

import './../styles/listCharacter.css'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const ListCharacter = ({ children }: Props) => {
  return <div className='listCharacter'>{children}</div>
}

export { ListCharacter }
