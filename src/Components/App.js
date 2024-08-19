
import { IoIosArrowUp } from 'react-icons/io';
import About from './About';
import Contact from './Contact';
import MyWork from './MyWork';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';


function App() {
  const [toggle,setToggle] = useState(false)
  // const scrollx = useState(window.scrollY)
 
    function onscroll(e){
      if(document.documentElement.scrollTop > 300) setToggle(true)
      if(document.documentElement.scrollTop < 300) setToggle(false)
      
    }
    window.addEventListener('scroll',onscroll)

   function handleScroll(){
    document.documentElement.scrollTop = 0
   }
  
  return (
  <div className='main dark:bg-black dark:text-white '>
    <NavBar/>

    <About/>

    <MyWork/>

    <Contact/>


{ toggle&& <div onClick={handleScroll} className=' cursor-pointer w-fit text-white bg-black text-2xl py-3 px-3 rounded-full fixed bottom-5 right-5'><IoIosArrowUp /></div> }
 </div>
  );
}

export default App;
