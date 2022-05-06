import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from './../store/store'
import { HeroDetail } from '../components/HeroDetail'
import { Empty } from '../components/Empty'
import { Breadcrumbs } from '../components/Breadcrumbs'

const Detail = () => {
  const character = useSelector((state: RootState) => state.characterReducer.character)

  console.log(character)

  return (
    <>
      <Breadcrumbs title='Detail' />
      {Object.keys(character).length !== 0 ? <HeroDetail character={character} /> : <Empty title='No character selection' message='return to home to select a character' />}
    </>
  )
}

export { Detail }
