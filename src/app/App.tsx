import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Bookmarks } from './pages/Bookmarks'
import { Detail } from './pages/Detail'

function App() {
  return (
    <Layout>
      <Logo />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>
    </Layout>
  )
}

export { App }
