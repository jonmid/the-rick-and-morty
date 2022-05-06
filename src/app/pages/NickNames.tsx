import React, { useState } from 'react'

import { TitlePage } from '../components/TitlePage'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ListNicknames } from '../components/ListNicknames'

const NickNames = () => {
  const [selectInput, setSelectInput] = useState('ASC')

  console.log(selectInput)

  return (
    <>
      <div className='mt-20 mb-5'>
        <TitlePage title='List Nick Names' />
      </div>

      <div className='mb-10'>
        <Breadcrumbs title='NickNames' />
      </div>

      <select
        onChange={e => setSelectInput(e.target.value)}
        className='block w-52 text-gray-700 py-2 px-3 mb-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
        name='order'
      >
        <option value='ASC'>ASC</option>
        <option value='DESC'>DESC</option>
      </select>

      <ListNicknames names={['Triviño TI', 'Homer Dev', ' ', ' Ragnar Front', 'Loki UX', '']} order={selectInput} />
    </>
  )
}

export { NickNames }
