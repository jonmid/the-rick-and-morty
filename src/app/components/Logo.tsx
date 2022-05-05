import React from 'react'

import './../styles/logo.css'
import rickAndMorty from './../../assets/icons/rickandmorty.svg'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={rickAndMorty} alt='rickAndMorty' />
    </div>
  )
}

export { Logo }
