import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'

 const Signin = () => {
  return (
    <div className='grid lg:grid-cols-2'>
        <div>   
            <Auth type="signin" />
        </div>
        <div className='hidden lg:block'>
        <Quote></Quote> 
        </div>
    </div>
  )
}

export default Signin

