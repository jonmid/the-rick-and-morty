import React from 'react'

import { TitlePage } from '../components/TitlePage'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'

const Bookmarks = () => {
  return (
    <>
      <div className='mt-20 mb-5'>
        <TitlePage title='my favorites' />
      </div>

      <Breadcrumbs title='Bookmarks' />

      <ListCharacter>
        <Character />
        <Character />
      </ListCharacter>
    </>
  )
}

export { Bookmarks }
