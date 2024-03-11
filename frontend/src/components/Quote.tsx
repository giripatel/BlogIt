import React from 'react'

const Quote = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center flex-col items-center'>
        <div className='flex flex-col max-w-lg'>
            <div className='text-3xl font-bold'>
                "The customer service I received was exceptional. The support team went above and beyond to address
                my concerns"
            </div>
            <div className='text-left font-semibold mt-4'>
                Julies Winfield
            </div>
            <div className='text-left text-slate-700'>
                CEO | ACME Corp
            </div>
        </div>
    </div>
  )
}

export default Quote
