import React from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/heroDetail.css'

const HeroDetail = () => {
  const navigate = useNavigate()

  return (
    <section className='hero-detail'>
      <div className='hero-detail__container'>
        <div className='hero-detail__container--image'>
          <img className='object-cover object-center rounded' alt='hero' src='https://dummyimage.com/720x600' />
        </div>

        <div className='hero-detail__info'>
          <h1>Before they sold out readymade gluten</h1>

          <p>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric
            truffaut hexagon try-hard chambray.
          </p>

          <button onClick={() => navigate(-1)}>Return</button>
        </div>
      </div>
    </section>
  )
}

export { HeroDetail }
