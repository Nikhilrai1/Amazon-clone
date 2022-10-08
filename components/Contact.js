import React from 'react'
// import { contactData } from '../data/contactData'
import {FaPhoneAlt, FaLinkedinIn} from "react-icons/fa"
import {MdOutlineEmail, MdLocationOn} from "react-icons/md"


// 📱
const Contact = ({email,address,phone,name}) => {
   const contactData = [
    {
        title: "Phone",
        info: phone,
        icon: <FaPhoneAlt className='h-9 w-9 text-white' />
    },
    {
        title: "LinkedIn",
        info: name,
        icon: <FaLinkedinIn className='h-9 w-9 text-white' />
    },
    {
        title: "Email",
        info: email,
        icon: <MdOutlineEmail className='h-9 w-9 text-white' />
    },
    {
        title: "Location",
        info: address,
        icon: <MdLocationOn className='h-9 w-9 text-white' />
    }
]
  return (
    <div id="contact" className='p-10 '>
      <div className="wrapper">
        <div className="title flex flex-col pb-10 justify-center items-center">
          <span className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700'>Contact Me 📱</span>
          <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5">
          {contactData.map(contact => (
            <div key={contact.title} className="cursor-pointer flex flex-col items-center justify-center gap-5 p-5 w-full md:w-2/5 lg:w-1/5 shadow-lg rounded-lg transition-all delay-150 ease-in-out hover:scale-110 hover:bg-green-200">
              <div className="icon p-5 rounded-full bg-green-500">
                {contact.icon}
              </div>
              <span className="text-2xl font-bold ">{contact.title}</span>
              <span className="text-md text-gray-700">{contact.info}</span>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Contact