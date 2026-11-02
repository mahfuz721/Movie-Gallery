'use client'

export default function InputGroup({name, type, onChange}) {
  return (
    <input
    name={name}
    type={type}
    onChange={onChange}
    className='border rounder px-3 py-2 w-100'
    />

    
  )
}
