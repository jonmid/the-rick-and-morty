import React from 'react'
import { Props } from './../utilities/interfaces'

const Layout = ({ children }: Props) => {
  return <div className='container mx-auto flex flex-col px-4'>{children}</div>
}

export { Layout }
