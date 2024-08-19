import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import Mode from './Mode'

export default function AltNav() {
    const [navToggle, setNavToggle] = useState(false)
    function handleScrollAbout() {
        document.documentElement.scrollTop = 0
        setNavToggle(false)

    }
    function handleScrollProject() {
        document.documentElement.scrollTop = 600
        setNavToggle(false)

    }
    function handleScrollcontact() {
        document.documentElement.scrollTop = 3000
        setNavToggle(false)

    }

    return (
        <div className='flex justify-between items-center px-10 py-4 md:hidden'>
            <h2 className='text-2xl cursor-pointer '>Ahmed Ali</h2>
            <div className='text-3xl  cursor-pointer relative flex items-center'><span onClick={() => setNavToggle(!navToggle)} className='relative'><FaBars /></span>
                {navToggle && <ul className=' dark:bg-white dark:text-black bg-slate-200 absolute right-12 top-7 rounded-md z-10 text-sm font-semibold px-3 '>
                    <li onClick={handleScrollAbout} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>About</li>
                    <li onClick={handleScrollProject} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Projects</li>
                    <li onClick={handleScrollcontact} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Contact us</li>

                </ul>}
                <Mode />
            </div>
        </div>
    )
}
