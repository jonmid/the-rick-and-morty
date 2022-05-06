import React from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/heroDetail.css'
import { IHeroDetailProps } from './../utilities/interfaces'

const HeroDetail = ({ character }: IHeroDetailProps) => {
  const navigate = useNavigate()

  return (
    <section className='hero-detail'>
      <div className='hero-detail__container'>
        <div className='hero-detail__container--image'>
          <img className='object-cover object-center rounded' alt='hero' src={character.image} />
        </div>

        <div className='hero-detail__info'>
          <h1>{character.name}</h1>

          <p>
            <span className='mr-2 font-bold text-app-700 uppercase'>specie:</span>
            {character.species}
          </p>

          <button onClick={() => navigate(-1)}>Return</button>
        </div>
      </div>
    </section>
  )
}

export { HeroDetail }
