import Image from 'next/image'
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems, selectTotalItem } from '../slices/basketSlice'
const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const basketItems = useSelector(selectItems);
    const totalItem = useSelector(selectTotalItem)
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-2">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectfit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* search */}
                <div className="bg-yellow-400 items-center h-10 rounded-md flex-grow hover:bg-yellow-500 hidden sm:flex cursor-pointer">
                    <input className="p-2 h-full w-6 outline-none rounded-l-md flex-grow flex-shrink px-4" type="text" />
                    <AiOutlineSearch className="h-12 w-12 p-2" />
                </div>

                {/* right */}
                <div  className="text-white whitespace-nowrap flex items-center text-sm space-x-6 mx-6">
                    <div onClick={() => !session ? signIn() : signOut()} className="link">
                        <p className="">{session ? "Hello" + session.user.name : "SignIn"}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="link relative flex items-center space-x-1">
                        <span className="absolute top-0 right-0 md:right-10  h-4 w-4 bg-yellow-400 flex items-center justify-center p-1 rounded-full">{totalItem ? totalItem : 0}</span>
                        <AiOutlineShoppingCart className="h-10 w-10" />
                        <p className="hidden md:inline-flex font-extrabold md:text-sm">Basket</p>
                    </div>

                </div>
            </div>

            {/* Bottom nav */}
            <div className="p-2 pl-6 text-white flex space-x-3 items-center bg-amazon_blue-light">
                <p className="link flex items-center">
                    <AiOutlineMenu className="mr-1 h-10" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Bussiness</p>
                <p className="link">Todays's Deal</p>
                <p className="link hidden md:inline-flex">Electronics</p>
                <p className="link hidden md:inline-flex">Food & Delivery</p>
                <p className="link hidden md:inline-flex">Prime</p>
                <p className="link hidden md:inline-flex">Buy Again</p>
                <p className="link hidden md:inline-flex">Shopper Toolkit</p>
                <p className="link hidden md:inline-flex">Healt & Personal Care</p>

            </div>
        </header>
    )
}

export default Header