import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './../store/store'
import { removeBookmark } from '../store/character.slice'
import { ICharacter } from './../utilities/interfaces'
import { TitlePage } from '../components/TitlePage'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { Empty } from '../components/Empty'

const Bookmarks = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.characterReducer.bookmarks)

  const handleClickRemoveBookmarks = (character: ICharacter) => {
    dispatch(removeBookmark(character.id))
  }

  return (
    <>
      <div className='mt-20 mb-5'>
        <TitlePage title='my favorites' />
      </div>

      <Breadcrumbs title='Bookmarks' />

      {characters.length > 0 ? (
        <ListCharacter>
          {characters.map((item: ICharacter) => (
            <Character key={item.id} character={item} titleButton='Delete to favorite' handleClick={handleClickRemoveBookmarks} />
          ))}
        </ListCharacter>
      ) : (
        <Empty title='Empty list' message='Go to the list of characters to select a favorite' />
      )}
    </>
  )
}

export { Bookmarks }
