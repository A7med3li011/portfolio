import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'

export default function Mode() {
    const [mode, setMode] = useState(true)
    function toggleMode() {
        document.documentElement.classList.toggle("dark")
        setMode(!mode)
    }
    useEffect(() => {
        if (document.documentElement.classList.contains("dark")) {
            setMode(false)
        }
    }, [])
    return (
        <ul>

            {mode && <li onClick={toggleMode} className='py-3 px-4 cursor-pointer text-xl text-blue-400 hover:text-blue-700 transition-all  duration-200'><FaMoon /></li>}
            {!mode && <li onClick={toggleMode} className='py-3 px-4 cursor-pointer text-xl text-yellow-400 hover:text-yellow-600 transition-all  duration-200'><GoSun /></li>}
        </ul>
    )
}
