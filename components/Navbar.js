import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";
import Sidebar from './Sidebar';
import Link from 'next/link';
import Modal from './Modal';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    return (
        <>
            <header className="w-[100vw] px-5 sm:px-10 py-5 lg:px-20 lg:py-5 shadow-md fixed top-0 bg-white z-50">
                {showModal && <Modal modalTitle={"Hire Me"} modalButton="Hire" setShowModal={setShowModal} />}
                <nav className='flex justify-between items-center'>
                    <div className="flex justify-between sm:flex-1">
                        <div className="logo flex items-center sm:gap-3 mr-20 cursor-pointer text-green-600  hover:text-green-500">
                            <FiBookmark className="h-10 w-10" />
                            <span className="font-bold text-lg sm:text-2xl font-mono">Nikhil Rai</span>
                        </div>
                        <div className="hidden lg:flex items-center links flex-1">
                            <ul className="flex items-center gap-4">
                                <li className="navItem flex items-center">
                                    <a href={"#"}><div className='hover:text-green-500 font-sans font-semibold'>Home</div></a>
                                </li>
                                <li className="navItem flex items-center">
                                    <a href={"#services"}><div className='hover:text-green-500 font-sans font-semibold'>Sevices</div></a>
                                </li>
                                <li className="navItem flex items-center">
                                    <a href={"#about"}><div className='hover:text-green-500 font-sans font-semibold'>About</div></a>
                                </li>
                                <li className="navItem flex items-center">
                                    <a href={"#project"}><div className='hover:text-green-500 font-sans font-semibold'>Projects</div></a>
                                </li>
                                <li className="navItem flex items-center">
                                    <a href={"#contact"}><div className='hover:text-green-500 font-sans font-semibold'>Contact</div></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button onClick={() => setShowModal(true)} className="hidden md:flex text-white  bg-green-600 border-0 py-1 px-4 sm:py-2 sm:px-8 focus:outline-none hover:bg-green-500 hover:shadow-lg rounded-full font-bold text-lg">Hire Me</button>
                        <button onClick={toggleSidebar} className="p-3 cursor-pointer lg:hidden text-green-600 hover:text-green-500 shadow-lg hover:shadow-2xl">
                            <GiHamburgerMenu className='w-3 h-3 sm:h-6 sm:w-10' />
                        </button>
                    </div>
                </nav>
            </header>
            <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        </>
    )
}

export default Navbar