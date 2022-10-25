
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const Product = ({ singleProduct }) => {
    const [rating, setRating] = useState(1);
    const [prime, setPrime] = useState(false);
    const dispatch = useDispatch();
    const { title, category, description, image, price } = singleProduct;
    const truncate = (string) => {
        return string.slice(0, 75) + "..."
    }



    useEffect(() => {
        setRating(Math.floor(Math.random() * 4) + 1)
        setPrime(Math.floor(Math.random() * 4) < 2 ? true : false)
    }, [])

    return (
        <div className="relative flex justify-between flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} width="200px" height="200" objectFit="contain" />
            <h4 className='my-5'>{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <AiFillStar key={i} className='h-5 w-5 text-yellow-500' />
                ))}
            </div>

            <p className="my-2">{truncate(description)}</p>

            <div className=''>
                ${price}
            </div>

            {prime && (<div className="flex items-center space-x-2">
                <img width={30} src="https://links.papareact.com/fdw" alt="" />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>)
            }
            <button onClick={() => dispatch(addToBasket({...singleProduct,rating,prime}))} className='button'>Add To Basket</button>
        </div>
    )
}

export default Product