import React, { useEffect } from 'react'

import './../styles/home.css'
import { ICharacter } from './../utilities/interfaces'
import { useSearchCharacter } from './../hooks/useCharacter'
import { Search } from '../components/Search'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { ButtonFavorite } from '../components/ButtonFavorite'
import { Loader } from '../components/Loader'
import { Empty } from '../components/Empty'

const Home = () => {
  const [getData, { data, loading, error }] = useSearchCharacter()

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
                <Character key={item.id} character={item} />
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
