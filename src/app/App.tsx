import React from 'react'
import { TitlePage } from './components/TitlePage'

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl text-app-600 font-bold'>The Rick and Morty</h1>
      <TitlePage title='Title The Page' />
    </div>
  )
}

export { App }
