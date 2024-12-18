import React, {  useState } from 'react'
import { FaBars } from 'react-icons/fa'

import Mode from './Mode'
import { useNavigate } from 'react-router-dom'

export default function AltNav() {
    const [navToggle, setNavToggle] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='flex justify-between items-center px-10 py-4 md:hidden'>
            <h2 className='text-2xl cursor-pointer '>Ahmed Ali</h2>
            <div className='text-3xl  cursor-pointer relative flex items-center'><span onClick={() => setNavToggle(!navToggle)} className='relative'><FaBars /></span>
                {navToggle && <ul className=' dark:bg-white dark:text-black bg-slate-200 absolute right-12 top-7 rounded-md z-10 text-sm font-semibold px-3 '>
                    <li onClick={()=>navigate("/")} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>About</li>
                    <li onClick={()=>navigate("/work")} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Projects</li>
                    <li onClick={()=>navigate("/contact")} className='py-3 px-4 cursor-pointer hover:text-blue-500 transition-all duration-200'>Contact us</li>

                </ul>}
                <Mode />
            </div>
        </div>
    )
}
