import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";

const Services = ({services}) => {
    return (
        <div id="services" className="p-10 w-full">
            <div className="title flex flex-col pb-10 justify-center items-center">
                <span className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700'>What I Do? 👩‍💻</span>
                <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
            </div>
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-5">
                {
                    services?.map(service => (
                        <div key={service._id} className="cursor-pointer flex justify-between items-center gap-3 p-3 shadow-md group hover:bg-green-200 rounded-md transition-all ease-in-out hover:scale-110 duration-200">
                            <div className="group-hover:text-green-500 ">
                                <BsCheckCircleFill />
                            </div>
                            <div className="text-gray-700">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services