import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className='h-[100vh] bg-black text-white text-center'>
      <p className='text-4xl mt-10 mb-4'>OOPS!</p>
      <p className='mb-4'>Not Found Page!</p>
      <button onClick={()=>navigate(-1)} className='bg-white text-black py-3 px-5 rounded-xl'>go back</button>
    </div>
  )
}
