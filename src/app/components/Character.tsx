import React from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/character.css'
import { ICharacterProps } from './../utilities/interfaces'

const Character = ({ character }: ICharacterProps) => {
  const navigate = useNavigate()

  const handleClickDetail = () => {
    navigate(`/detail`)
  }

  return (
    <div className='character'>
      <div onClick={() => handleClickDetail()} className='character__image' style={{ backgroundImage: `url(${character.image})` }}></div>

      <div className='character__info'>
        <h3 className='character__info--title'>{character.name}</h3>

        <section className='character__info--section'>
          <button>Add to favorite</button>
        </section>
      </div>
    </div>
  )
}

export { Character }
