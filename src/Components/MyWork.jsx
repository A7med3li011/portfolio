import React, { useState } from 'react'
import Card from './Card'
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
const works = [
    {
        name: "The-Wild-Oasis",
        link: "https://the-wild-oasis-phi-five.vercel.app",
        tec: "React",
        img: "./oasisjpg.jpg",
        des: "The Wild Oasis is a React application build for hotel service. I built this project while practicing React, Supabase and more ,using a lot of libraries like react-query, react-router-dom , react-hooks-useform ,etc provide validation ,authentication,autherization and dark mode and crud operations",
        icon:[<FaReact />,<RiTailwindCssFill />]
    },
    {
        name: "Shopping-Store",
        link: "https://the-shopping-store.vercel.app/",
        tec: "React",
        img: "./shop.jpg",
        des: "Shopping-Store is a React application build by using a lot of libraries like react-query, react-router-dom , formik ,yup,helmet ,etc provide validation ,authentication,autherization and crud operations"
        ,icon:[<FaReact />,<FaBootstrap />]

    },
    {
        name: "pizza-Store",
        link: "https://a7med3li011.github.io/Pizza-Restuarant/",
        tec: "React",
        img: "./pizza.webp",
        des: "pizza-Store is a React application build by using a lot of libraries like axios, reduxToolKit ,etc provide crud operations",
    icon:[<FaReact />,<RiTailwindCssFill />]
    },

    {
        name: "GameSite",
        link: "https://a7med3li011.github.io/GameSite/",
        tec: "JS",
        img: "./game.jpg",
        des: "game site deal with API display many games and filtering data which recieved from API  ",
        icon:[<FaJs />,<FaBootstrap />]
    },
    {
        name: "Weather-App",
        link: "https://a7med3li011.github.io/weather/",
        tec: "JS",
        img: "./weather.jpg",
        des: "Weather App (Vanilla JS) A website to determine the weather for 3 days by specifying your location and the country in which you are located  and predict two days after ",
        icon:[<FaJs />,<FaBootstrap />]
    },
    {
        name: "CRUD-System",
        link: "https://a7med3li011.github.io/CRUD/",
        tec: "JS",
        img: "./crud.png",
        des: "crud system allow user to inserte, delete , update ,search  with friendly UI",
        icon:[<FaJs />,<FaBootstrap />]
    },
    {
        name: "Guess-Game",
        link: "https://a7med3li011.github.io/Guess-Game/",
        tec: "JS",
        img: "./mindGame.jpg",
        des: " allows to user to predict letters of the word and check if his prediction was right or wrong and provide specific number of tries",
        icon:[<FaJs />,<FaBootstrap />]
    },
    {
        name: "creativo",
        link: " https://a7med3li011.github.io/temp/",
        tec: "css",
        img: "./bnt.png",
        des: "template with html and css with ",
        icon:[<FaCss3 />,<FaHtml5 />]
    },

]

export default function MyWork() {
    const [sort,sortValue] = useState(null)
    let data;

    if(sort ==="all" || sort === null) data = works

    if(sort ==="css") data = works.filter(item=>item.tec ==="css")
    if(sort ==="JS") data = works.filter(item=>item.tec ==="JS")
    if(sort ==="React") data = works.filter(item=>item.tec ==="React")

    return (
        <div className='px-10 py-4 bg-slate-100 dark:bg-black'>
            <h2 className=' text-center sm:text-3xl text-xl   mb-8' >MY WORK</h2>
            <div className='flex py-2 justify-center mb-10' >
                <button onClick={(e)=>sortValue(e.target.value)} value={"all"} className='w-32 rounded-lg text-white sm:py-1 bg-blue-600 me-1 px-2' >All</button>
                <button onClick={(e)=>sortValue(e.target.value)} value={"css"} className='w-32 rounded-lg text-white sm:py-1 bg-blue-600 me-1 px-2' >HTMl&CSS</button>
                <button onClick={(e)=>sortValue(e.target.value)} value={"JS"} className='w-32 rounded-lg text-white sm:py-1 bg-blue-600 me-1 px-2' >JS</button>
                <button onClick={(e)=>sortValue(e.target.value)} value={"React"} className='w-32 rounded-lg text-white sm:py-1 bg-blue-600 me-1 px-2' >React JS</button>
            </div>
            <div className='flex  justify-center items-center flex-wrap gap-x-7'>
                {data?.map(task => <Card task={task} key={task.link} />)}
            </div>
        </div>
    )
}
