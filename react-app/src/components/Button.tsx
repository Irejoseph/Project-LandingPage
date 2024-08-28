import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    color?: string
    onClick: () => void
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type='button' className='btn btn-outline-warning' onClick={onClick}>{children}</button>
  )
}

export default Button