import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import AltNav from './AltNav'
import Mode from './Mode'

export default function NavBar() {
    const [mode,setMode] = useState(true)
   function handleScrollAbout(){
        document.documentElement.scrollTop = 0
        
   }
   function handleScrollProject(){
        document.documentElement.scrollTop = 600
        
   }
   function handleScrollcontact(){
        document.documentElement.scrollTop = 3000
        
   }
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
                <li onClick={handleScrollAbout} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>About</li>
                <li onClick={handleScrollProject} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Projects</li>
                <li onClick={handleScrollcontact} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Contact us</li>
                
            <Mode   />
            </ul>
        </div>
        <AltNav/>
        </>
    )
}
