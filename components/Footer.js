import React from 'react'
import { SiFacebook, SiInstagram } from "react-icons/si";
import { ImTwitter } from "react-icons/im";
import { BsGithub } from "react-icons/bs";



const Footer = ({portFolioName,logo,copyright,social}) => {
    return (
        <div className='p-5 border shadow-md'>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex cursor-pointer items-center gap-3">
                        <div className="">
                            <img src={logo} className='h-16 w-16 rounded-full' alt="profile" />
                        </div>
                        <span className='text-lg font-bold text-gray-900 hover:text-black'>{portFolioName}</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="boredr border-l-2 h-10 hidden md:block"></div>
                        <div className='text-gray-500 text-sm sm:text-lg flex justify-center items-center flex-wrap sm:flex-nowrap'>
                            <span>copyright © 2022</span>
                            <span className='ml-1'>{copyright}.com</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0">
                    <div className="flex items-center justify-between gap-3 text-gray-900 p-2 px-3 shadow-sm">
                        <a target="_blank" rel="noreferrer" href={social.facebook}><SiFacebook className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
                        <a target="_blank" rel="noreferrer" href={social.twitter}><ImTwitter className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
                        <a target="_blank" rel="noreferrer" href={social.instagram}><SiInstagram className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
                        <a target="_blank" rel="noreferrer" href={social.github}><BsGithub className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer