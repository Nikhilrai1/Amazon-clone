import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSession } from "next-auth/react"


const Checkout = () => {
  const basketItems = useSelector(selectItems);
  const totalPrice = useSelector(selectTotal);
  const { data: session } = useSession();
console.log(basketItems)
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {basketItems.length === 0 ? "Your Amazon Basket Is Empty" : "Your Shopping Basket"}
            </h1>

            {basketItems.map((item, i) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}

          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {basketItems.length > 0 && (
            <>
              <h1>Subtotal ({basketItems.length} items) :
                <span>
                  ${totalPrice}
                </span>
              </h1>
              <button
                disabled={!session}
                className={`button mt-2 ${!session && 'from-gray-200 to-gray-500 border-gray-200 cursor-not-allowed text-gray-300 '}`} >
                {!session ? "Login To Checkout" : "Proceed To Checkout"}
              </button>
            </>
          )

          }
        </div>
      </main>
    </div>
  )
}

export default Checkout