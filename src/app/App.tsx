import React from 'react'
import { Empty } from './components/Empty'

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl text-app-600 font-bold'>The Rick and Morty</h1>
      <Empty title='Pagina' message='No se encontro datos para mostrar' />
    </div>
  )
}

export { App }
