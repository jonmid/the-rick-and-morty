import React from 'react'
import './../styles/character.css'

const Character = () => {
  const URL_IMG = 'https://images.unsplash.com/photo-1620689918623-37cb53f56c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80'

  return (
    <div className='character'>
      <picture className='character__image' style={{ backgroundImage: `url(${URL_IMG})` }}></picture>

      <div className='character__info'>
        <h3 className='character__info--title'>Rick</h3>

        <section className='character__info--section'>
          <button>Add to favorite</button>
        </section>
      </div>
    </div>
  )
}

export { Character }
