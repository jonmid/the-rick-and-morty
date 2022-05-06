import React from 'react'

import { IListNicknamesProps } from './../utilities/interfaces'

const ListNicknames = ({ names, order }: IListNicknamesProps) => {
  const namesClean = names.map(item => item.trim()).filter(Boolean)
  const orderNames = order === 'ASC' ? namesClean.sort() : namesClean.sort().reverse()

  return (
    <>
      <table className='table p-4 max-w-sm bg-white shadow rounded-lg'>
        <thead>
          <tr>
            <th className='border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-app-600'>#</th>
            <th className='border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-app-600'>Nick Name</th>
          </tr>
        </thead>
        <tbody>
          {orderNames.map((item, index) => (
            <tr key={index} className='text-gray-700'>
              <td className='border p-4 dark:border-dark-5 text-center'>{index + 1}</td>
              <td className='border p-4 dark:border-dark-5 text-center'>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export { ListNicknames }
