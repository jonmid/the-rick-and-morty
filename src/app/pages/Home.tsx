import React from 'react'

import './../styles/home.css'
import rickAndMorty from './../../assets/icons/rickandmorty.svg'
import { Layout } from './../components/Layout'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'

const Home = () => {
  return (
    <Layout>
      <div className='home-logo'>
        <img src={rickAndMorty} alt='rickAndMorty' />
      </div>

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
