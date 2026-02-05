import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroPage from './components/HeroPage'
import OfferBanner from './components/OfferBanner'
import HurryUp from './components/HurryUp'
import Offer from './components/Offer'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Trending from './components/Trending'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import FooterFixed from './components/FooterFixed'


function App() {
  

  return (
    <div className='w-full'>
    <Header />

    <HeroPage />
    <OfferBanner />
    <HurryUp />
    <Offer />
   <Product1 />
   <Product2 />
   <Trending />
    <Product1 />
    <Product2 />
    <Footer />
    <Footer2 />
    <FooterFixed />
    </div>
  )
}

export default App
