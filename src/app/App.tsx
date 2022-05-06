import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Bookmarks } from './pages/Bookmarks'
import { Detail } from './pages/Detail'
import { NickNames } from './pages/NickNames'

function App() {
  return (
    <Layout>
      <Logo />

      <div className='flex items-center justify-center my-10'>
        <span className='ml-2 inline-flex items-center text-lg font-thin text-center text-app-600'>
          Created with
          <svg fill='currentColor' className='mx-1 w-3 h-3 text-red-500' viewBox='0 0 16 16'>
            <path d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z' />
          </svg>
          by Jhonatan Mideros
        </span>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/listnicknames' element={<NickNames />} />
        <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>
    </Layout>
  )
}

export { App }
