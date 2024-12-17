import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import AltNav from './AltNav'
import Mode from './Mode'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [mode,setMode] = useState(true)
    
   
    useEffect(()=>{
        if(document.documentElement.classList.contains("dark")){
            setMode(false)
        }
    },[])
 
    return (
        <>
        <div className=' hidden md:flex justify-between items-center px-10 py-4 '>
            <h2 className='text-2xl cursor-pointer '>Ahmed Ali</h2>

           
            <ul className='flex '>
               <Link to={"/"}> <li className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>About</li></Link>
               <Link to={"/work"}> <li className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Projects</li> </Link> 
               <Link to={"/contact"}> <li className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Contact us</li></Link>
                
            <Mode   />
            </ul>
        </div>
        <AltNav/>
        </>
    )
}
