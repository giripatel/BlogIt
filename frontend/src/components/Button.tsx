import {FC, MouseEvent, ReactNode } from 'react'

interface ButtonProps{
    children : ReactNode;
    onClick  : (e : MouseEvent<HTMLButtonElement>) => void;
}
const Button : FC<ButtonProps> = ({children,onClick}) => {
  return (
    <div>
      <button type="button" onClick={onClick} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5 mb-2 ">{children}</button>
    </div>
  )
}

export default Button
