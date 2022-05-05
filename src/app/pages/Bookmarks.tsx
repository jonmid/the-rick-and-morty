import React from 'react'

import { Layout } from './../components/Layout'
import { Logo } from '../components/Logo'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'
import { TitlePage } from '../components/TitlePage'

const Bookmarks = () => {
  return (
    <Layout>
      <Logo />

      <div className='mt-20'>
        <TitlePage title='my favorites' />
      </div>

      <ListCharacter>
        <Character />
        <Character />
      </ListCharacter>
    </Layout>
  )
}

export { Bookmarks }
