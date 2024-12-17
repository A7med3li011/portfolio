
import { IoIosArrowUp } from 'react-icons/io';
import About from './About';
import Contact from './Contact';
import MyWork from './MyWork';
import NavBar from './NavBar';
import { useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './PageNotFound';


function App() {
  // const [toggle,setToggle] = useState(false)
  
  //   window.addEventListener('scroll',onscroll)

  //  function handleScroll(){
  //   document.documentElement.scrollTop = 0
  //  }
  const router = createHashRouter([
    {
      element: <Layout />, children: [

        
        { path: "/", element: <About />  },
        { path: "work", element: <MyWork />  },
        { path: "contact", element: <Contact/>  },
       
        { path: "*", element:  <PageNotFound />  },
        
        
      ]
    },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}

  
  


export default App;
/* { toggle&& <div onClick={handleScroll} className=' cursor-pointer w-fit text-white bg-black text-2xl py-3 px-3 rounded-full fixed bottom-5 right-5'><IoIosArrowUp /></div> }
 */ 