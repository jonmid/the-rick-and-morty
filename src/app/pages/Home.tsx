import React from 'react'

import './../styles/home.css'
import { ICharacter } from './../utilities/interfaces'
import { useCharacter } from './../hooks/useCharacter'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'

const Home = () => {
  const { data, loading, error } = useCharacter()

  console.log(data?.characters.results)

  return (
    <>
      <Search />

      <div className='home-favorite'>
        <ButtonFavorite />
        <span className='home-favorite--text'>Show favorites</span>
      </div>

      {loading ? (
        <h1>Cargando ....</h1>
      ) : (
        <ListCharacter>
          {data?.characters.results.map((item: ICharacter) => (
            <Character key={item.id} character={item} />
          ))}
        </ListCharacter>
      )}
    </>
  )
}

export { Home }
