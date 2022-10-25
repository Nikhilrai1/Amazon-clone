import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';



export default function Home({products}) {

  return (
    <div className="m-0 p-0 box-border bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* header */}
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        
        {/* banner */}
        <Banner />

        {/* productFeed */}
        <ProductFeed products={products} />

      </div>
    </div>
  )
}



export async function getServerSideProps(context){
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return {
    props: {products}
  }
}

