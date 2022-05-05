import React from 'react'

import './../styles/home.css'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'

const Home = () => {
  return (
    <>
      <Search />

      <div className='home-favorite'>
        <ButtonFavorite />
        <span className='home-favorite--text'>Show favorites</span>
      </div>

      <ListCharacter>
        <Character />
        <Character />
      </ListCharacter>
    </>
  )
}

export { Home }
