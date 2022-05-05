import React from 'react'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return <div className='container mx-auto flex flex-col'>{children}</div>
}

export { Layout }
