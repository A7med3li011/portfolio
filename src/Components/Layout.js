import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='main dark:bg-black dark:text-white '>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
