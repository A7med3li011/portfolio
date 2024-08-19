import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import emailjs from "@emailjs/browser"

export default function Contact() {
    const serviceId = "service_jy0y1if"
    const tempId = "template_c21h2mk"
    const publicKey = "GgEEEK68lnerilKjq"
    const [name,SetName] = useState("")
    const [email,SetEmail] = useState("")
    const [message,SetMessage] = useState("")

    function handleSumbit(e){
        e.preventDefault()
        if(!name || !email || !message) return

        const params={
            from_name:name,
            from_email:email,
            to_name:"ahmed ali",
            message,
        }
        emailjs.send(serviceId,tempId,params,publicKey).then(res=>{
            SetName("")
            SetEmail("")
            SetMessage("")
            
            
        }).catch(err=>console.log(err))
    }
  return (
    <div className='py-5 mt-3'>
        <h2 className='text-xl sm:text-3xl  text-center'>Let's Work Together</h2>

        <form onSubmit={handleSumbit} className='bg-slate-100 w-full sm:w-2/3 mx-auto py-5 px-6 rounded-lg mt-5 dark:bg-black shadow-md'  >
            <div className='  gap-x-3 mb-4'>
                <label className='font-semibold w-1/6 block mb-2 ' htmlFor="Name">Name</label>
                <input value={name} onChange={(e)=>SetName(e.target.value)} className=' border-2 transition-all duration-200 border-slate-200 w-full rounded-lg  py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black py-1 px-3' id='Name' type='text' />
            </div>
            <div className='  gap-x-3 mb-4'>
                <label className='font-semibold w-1/6 block mb-2 ' htmlFor="Email">Email</label>
                <input value={email} onChange={(e)=>SetEmail(e.target.value)} className=' border-2 transition-all duration-200 border-slate-200 w-full rounded-lg  py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black py-1 px-3' id='Email' type='email' />
            </div>
            <div className='  gap-x-3 mb-4'>
                <label className='font-semibold w-1/6 block mb-2 ' htmlFor="Message">Message</label>
                <textarea value={message} onChange={(e)=>SetMessage(e.target.value)} id='Message' className='border-2 transition-all duration-200 border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black py-1 px-3 w-full rounded-lg'></textarea>
            </div>

            <button disabled={(!name || !email || !message)} className=' text-white flex items-center gap-x-2 bg-blue-500 w-full justify-center py-1 rounded-full disabled:bg-blue-300'><span> Send </span> <span> <IoIosSend />  </span> </button>
        </form>
    </div>
  )
}
