import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Card({ task }) {

    return (
        <div className='w-full sm:w-1/3 lg:w-1/4 me-1  pb-5 dark:border-2 dark:border-white/20  shadow-lg rounded-lg mb-8 hover:rotate-1 transition-all duration-200'>
            <div className=' mb-10'>

                <img src={task.img} className='w-full h-56  rounded-t-lg' alt="" />
                <p className='px-4 my-3 text-lg font-semibold'>{task.name}</p>
                <p className='px-4 h-44 text-xs lg:text-sm text-black/70 dark:text-white/80'>{task.des}</p>
            </div>
            <div className="px-4 bottom flex justify-between items-center">
                <div className='flex text-xl gap-x-2 justify-between items-center '>
                    <span><a target='blank' href={task.link}> <FaLink /> </a></span>
                    <span><a href='https://github.com/A7med3li011?tab=repositories'> <FaGithub /> </a></span>
                </div>
                <div className='flex gap-x-2 justify-between items-center  '>
                    {task.icon.map((ic, index) => <div key={index} className='text-blue-500 text-2xl'>{ic}</div>)}
                </div>
            </div>
        </div>
    )
}
