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
    <div>
        <label className='text-lg pt-2' htmlFor={label}>{label}</label>
        <input type={type} id={label} onChange={onChange} className='w-full border border-black rounded-md p-2' placeholder={placeholder} />
    </div>
  )
}

export default Input
