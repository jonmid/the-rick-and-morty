import React from 'react'

import './../styles/home.css'
import { Layout } from './../components/Layout'
import { Logo } from '../components/Logo'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'

const Home = () => {
  return (
    <Layout>
      <Logo />

      <Search />

      <div className='home-favorite'>
        <ButtonFavorite />
        <span className='home-favorite--text'>Show favorites</span>
      </div>

      <ListCharacter>
        <Character />
        <Character />
      </ListCharacter>
    </Layout>
  )
}

export { Home }