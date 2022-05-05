import React from 'react'

import { Layout } from './../components/Layout'
import { Logo } from '../components/Logo'
import { TitlePage } from '../components/TitlePage'
import { ListCharacter } from '../components/ListCharacter'
import { Character } from '../components/Character'

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
