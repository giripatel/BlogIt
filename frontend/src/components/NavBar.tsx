import React from 'react'
import Avatar from './Avatar'



const NavBar = ({name} : {name : string} ) => {
  return (
    <div>
      <nav className='bg-yellow-200 flex justify-between p-5'>
        <div className='font-extrabold text-2xl font-serif'>BlogIt</div>
        <div className='flex gap-3'><Avatar name='Giridhar'/> <div className='flex flex-col justify-center text-xl font-semibold'>Giridhar</div></div>
        
      </nav>
    </div>
  )
}

export default NavBar
