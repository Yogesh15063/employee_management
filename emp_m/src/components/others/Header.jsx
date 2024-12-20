import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex justify-between items-end'>
        <h1 className='text-xl font-bold'>Hello, <br /><span className='text-3xl'>Yogesh👋 </span></h1>
        <button  className='p-2 bg-gray-500 rounded-md text-xl font-semibold'>Logout</button>
      </div>
    </>
  )
}

export default Header
