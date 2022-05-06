import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './../styles/home.css'
import { ICharacter } from './../utilities/interfaces'
import { addBookmark } from '../store/character.slice'
import { useSearchCharacter } from './../hooks/useCharacter'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'
import { Loader } from '../components/Loader'
import { Empty } from '../components/Empty'

const Home = () => {
  const dispatch = useDispatch()
  const [getData, { data, loading, error }] = useSearchCharacter()

  const handleClickBookmarks = (character: ICharacter) => {
    dispatch(addBookmark({ id: character.id, name: character.name, image: character.image, species: character.species }))
  }

  useEffect(() => {
    getData({ variables: { nameToSearch: '' } })
  }, [])

  return (
    <>
      <Search getData={getData} />

      <div className='home-favorite'>
        <ButtonFavorite />
        <span className='home-favorite--text'>Show favorites</span>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {data !== undefined ? (
            <ListCharacter>
              {data?.characters.results.map((item: ICharacter) => (
                <Character key={item.id} character={item} titleButton='Add to favorite' handleClick={handleClickBookmarks} />
              ))}
            </ListCharacter>
          ) : (
            <Empty title='Character Not Found' message='verify the information you entered' />
          )}
        </>
      )}
    </>
  )
}

export { Home }
