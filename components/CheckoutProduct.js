import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { truncate } from '../utils/truncate';

const CheckoutProduct = ({ item }) => {
    const dispatch = useDispatch();
    const { title, prime, rating, description, image, price, quantity } = item;
    const [selectQuantity, setSelectQuantity] = useState(quantity);

    const handleChange = (e) => {
        setSelectQuantity(e.target.value)
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='grid grid-cols-5'>

            {/* left */}
            <Image src={image} width={200} height={200} objectFit="contain" />

            {/* middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <AiFillStar key={i} className='h-5 w-5 text-yellow-500' />
                    ))
                    }
                </div>
                <p className="text-xs my-2">{truncate(description)}</p>

                <div className='flex space-x-2'>
                    <span>Quantity: {quantity}</span>
                    <span>Price: ${price * quantity}</span>
                </div>

                {prime && (<div className="flex items-center space-x-2">
                    <img width={30} src="https://links.papareact.com/fdw" alt="prime" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
                )}
            </div>

            {/* right */}
            <div className="flex flex-col my-auto space-y-2 flex-self-end">
                <button className='button' onClick={() => dispatch(addToBasket(item))}>Add To Basket</button>
                <button className='button' onClick={() => dispatch(removeFromBasket({ id: item.id }))}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct