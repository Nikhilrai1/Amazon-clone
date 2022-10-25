import React from 'react'
import Product from './Product'
// import SingleProduct from './SingleProduct'

const ProductFeed = ({ products }) => {

    return (
        <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0, 4).map((product) => (
                <Product key={product.id} singleProduct={product} />
            ))}

            <img className="md:col-span-full w-full" src="https://links.papareact.com/dyz" alt="banner" />

            <div className="md:col-span-2">
                {products.slice(5, 6).map((product) => (
                    <Product key={product.id} singleProduct={product} />
                ))}
            </div>

            <div className="md:col-span-2">
                {products.slice(7, 8).map((product) => (
                    <Product key={product.id} singleProduct={product} />
                ))}
            </div>



            {products.slice(9,products.length).map((product) => (
                <Product key={product.id} singleProduct={product} />
            ))}
        </div>
    )
}

export default ProductFeed