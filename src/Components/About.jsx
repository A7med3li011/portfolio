import React from 'react'

export default function About() {
    return (
        <div className=' px-10 py-3 lg:flex-row flex-col gap-y-5 text-center lg:text-start    flex justify-between items-center h-[100vh]'>
            <div className="left lg:w-2/3   ">
            <h1 className="animated-text mb-4 "><span className='after:bg-white dark:after:bg-black text-2xl sm:text-3xl pb-4'>MERN Stack Developer</span></h1>
                <p className='md:text-lg text-gray-500 dark:text-gray-300'>I'm Ahmed Ali , student at faculty of computer and data science, Alexandria University . I am mern stack Developer with proficient knowledge in HTML , CSS  , bootstrap , tailwind , Javascript , React JS , nodeJs , expressJs and mongoDB </p>
            </div>
            <div className="right    ">

                <img className='h-96 w-96 rounded-full' src="./myImage.png" alt="" />

            </div>

        </div>
    )
}
