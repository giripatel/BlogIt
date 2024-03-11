import React, { ChangeEvent, ChangeEventHandler } from 'react'


interface InputPorps {
    label : string
    placeholder : string,
    type? : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
    label,
    placeholder,
    type,
    onChange,
} : InputPorps) => {
  return (
    <div className='mt-2'>
        <label className='text-lg p-1' htmlFor={label}>{label}</label>
        <input type={type} id={label} onChange={onChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ' placeholder={placeholder} />
    </div>
  )
}

export default Input
