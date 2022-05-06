import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from './../store/store'
import { HeroDetail } from '../components/HeroDetail'

const Detail = () => {
  const character = useSelector((state: RootState) => state.characterReducer.character)

  return (
    <>
      <HeroDetail character={character} />
    </>
  )
}

export { Detail }
