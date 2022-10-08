import React,{useState} from 'react'
import { AiFillProject } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"
import { MdPermContactCalendar, MdOutlineCancel } from "react-icons/md"
import Link from 'next/link'
import { FiBookmark } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import Modal from './Modal'


const Sidebar = ({ toggleSidebar, showSidebar}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <aside className={`w-full sm:w-[60%]  transition-all duration-500 z-50 shadow-2xl fixed top-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
            <div className="relative overflow-y-auto h-[100vh] py-4 px-3 bg-gray-100 bg-opacity-0.7  rounded dark:bg-gray-800">
                <button className="absolute top-3 right-3 md:top-5 md:right-4 p-3  hover:bg-black hover:text-white hover:rounded-full hover:shadow-md" onClick={() => toggleSidebar()}>
                    <MdOutlineCancel className="h-7 w-7 md:h-9 md:w-9 hover:text-white" />
                </button>
                {showModal && <Modal modalTitle={"Hire Me"} modalButton="Hire" setShowModal={setShowModal} />}
                <ul className="space-y-2">
                    <li>
                        <a href="#">
                            <div className="logo flex items-center gap-3 mr-20 cursor-pointer pl-3 bg-green-500 text-white hover:bg-green-700 rounded-lg py-3 shadow-lg">
                                <FiBookmark className="text-white h-10 w-10" />
                                <span className="font-bold text-2xl font-mono">Nikhil Rai</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><div className="flex items-center p-2 text-base font-normal text-green-600 rounded-lg dark:text-white hover:text-white hover:bg-green-600 dark:hover:bg-gray-700">
                            <TiHome className="flex-shrink-0 w-6 h-6" />
                            <span className="flex-1 font-mono ml-3 whitespace-nowrap font-semibold text-lg">Home</span>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#about"><div className="flex items-center p-2 text-base font-normal text-green-600 rounded-lg dark:text-white hover:text-white hover:bg-green-600 dark:hover:bg-gray-700">
                            <FcAbout className="flex-shrink-0 w-6 h-6" />
                            <span className="flex-1 font-mono ml-3 whitespace-nowrap font-semibold text-lg">About</span>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#services"><div className="flex items-center p-2 text-base font-normal text-green-600 rounded-lg dark:text-white hover:text-white hover:bg-green-600 dark:hover:bg-gray-700">
                            <AiFillProject className="flex-shrink-0 w-6 h-6" />
                            <span className="flex-1 font-mono ml-3 whitespace-nowrap font-semibold text-lg">Services</span>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#project"><div className="flex items-center p-2 text-base font-normal text-green-600 rounded-lg dark:text-white hover:text-white hover:bg-green-600 dark:hover:bg-gray-700">
                            <AiFillProject className="flex-shrink-0 w-6 h-6" />
                            <span className="flex-1 font-mono ml-3 whitespace-nowrap font-semibold text-lg">Project</span>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#contact"><div className="flex items-center p-2 text-base font-normal text-green-600 rounded-lg dark:text-white hover:text-white hover:bg-green-600 dark:hover:bg-gray-700">
                            <MdPermContactCalendar className="flex-shrink-0 w-6 h-6" />
                            <span className="flex-1 font-mono ml-3 whitespace-nowrap font-semibold text-lg">Get in touch</span>
                        </div>
                        </a>
                    </li>
                    <li>
                        <button onClick={() => setShowModal(true)} className="flex md:hidden text-white bg-green-600 border-0 py-2 px-8 rounded-lg focus:outline-none hover:bg-green-500 hover:shadod-lg font-bold text-lg">Hire Me</button>
                    </li>
                </ul>
            </div>

        </aside>
    )
}
export default Sidebar