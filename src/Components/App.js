
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
 