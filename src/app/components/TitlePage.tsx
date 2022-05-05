import React from 'react'

import './../styles/titlePage.css'

type TitlePageProps = {
  title: string
}

const TitlePage = ({ title }: TitlePageProps) => {
  return <h1 className='title-page'>{title}</h1>
}

export { TitlePage }
