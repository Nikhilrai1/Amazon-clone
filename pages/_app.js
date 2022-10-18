import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='m-0 p-0 box-border'>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp

