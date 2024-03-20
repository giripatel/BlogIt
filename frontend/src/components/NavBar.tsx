import React from 'react'
import Avatar from './Avatar'



const NavBar = ({name} : {name : string} ) => {
  return (
    <div>
      <nav className='bg-teal-500 flex justify-between p-5'>
        <div className='font-extrabold text-2xl font-serif'>BlogIt</div>    
        <div className='flex gap-3'><Avatar size='big' name={name}/> <div className='flex flex-col justify-center text-xl font-semibold text-slate-100'>{name}</div></div>
        
      </nav>
    </div>
  )
}

export default NavBar
