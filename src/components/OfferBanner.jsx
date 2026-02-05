import React from 'react'
import desktopBlue from './../assets/Images/desktopBlue.webp'
import mobileBlue from './../assets/Images/mobileBlue.webp'

const OfferBanner = () => {
  return (
   
    <div className="w-full px-5 py-6 lg:p-15 lg:pl-25 lg:pr-25 lg:pb-10">
      <picture className='p'>
        {/* Mobile Image */}
        <source 
          media="(max-width: 767px)" 
          srcSet={mobileBlue} 
        />

        {/* Desktop Image */}
        <img
          src={desktopBlue}
          alt="Offer Banner"
          className="w-full"
        />
      </picture>
    </div>
   
  )
}

export default OfferBanner
