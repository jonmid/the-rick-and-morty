import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './../styles/character.css'
import { ICharacterProps } from './../utilities/interfaces'
import { addCharacter } from '../store/character.slice'

const Character = ({ character, titleButton, handleClick }: ICharacterProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickDetail = () => {
    dispatch(addCharacter({ id: character.id, name: character.name, image: character.image, species: character.species }))
    navigate(`/detail`)
  }

  const handleClickBookmarks = () => {
    handleClick(character)
  }

  return (
    <div className='character'>
      <div onClick={() => handleClickDetail()} className='character__image' style={{ backgroundImage: `url(${character.image})` }}></div>

      <div className='character__info'>
        <h3 className='character__info--title'>{character.name}</h3>

        <section className='character__info--section'>
          <button type='button' onClick={() => handleClickBookmarks()}>
            {titleButton}
          </button>
        </section>
      </div>
    </div>
  )
}

export { Character }
