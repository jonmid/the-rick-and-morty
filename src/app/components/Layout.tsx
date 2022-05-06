import React from 'react'
import { Props } from './../utilities/interfaces'

const Layout = ({ children }: Props) => {
  return <div className='container mx-auto flex flex-col px-4 md:px-0'>{children}</div>
}

export { Layout }
