
import {FaPhoneAlt, FaLinkedinIn} from "react-icons/fa"
import {MdOutlineEmail, MdLocationOn} from "react-icons/md"

export const contactData = [
    {
        title: "Phone",
        info: "+9779813590938",
        icon: <FaPhoneAlt className='h-9 w-9 text-white' />
    },
    {
        title: "LinkedIn",
        info: "Nikhil Rai",
        icon: <FaLinkedinIn className='h-9 w-9 text-white' />
    },
    {
        title: "Email",
        info: "nrai9027@gmail.com",
        icon: <MdOutlineEmail className='h-9 w-9 text-white' />
    },
    {
        title: "Location",
        info: "Kathmandu, Nepal",
        icon: <MdLocationOn className='h-9 w-9 text-white' />
    }
]