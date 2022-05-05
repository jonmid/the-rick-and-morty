import React from 'react'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return <div className='container mx-auto flex flex-col px-4 md:px-0'>{children}</div>
}

export { Layout }
