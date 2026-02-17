import React, { useState, useEffect } from 'react'
import desktopImg from './../assets/Images/desktopImg.webp'
import MobileImg from './../assets/Images/MobileImg.webp'
import mobile2 from './../assets/Images/mobile2.png'
import desk2 from './../assets/Images/desk2.jpg'
import desk3 from './../assets/Images/desk3.png'
import mobile3 from './../assets/Images/mobile3.jpg'

const realSlides = [
  {
    desktop: desktopImg,
    mobile: MobileImg,
    alt: 'hero 1'
  },
  {
    desktop: desk2,
    mobile: mobile2,
    alt: 'hero 2'
  },
  {
    desktop: desk3,
    mobile: mobile3,
    alt: 'hero 3'
  }
]

const extendedSlides = [
  realSlides[realSlides.length - 1],
  ...realSlides,
  realSlides[0],
];





const HeroPage = () => {
  const [current, setCurrent] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(realSlides.length);
      }, 700);
    }
  }, [current]);




  return (
    <div className="w-full relative overflow-hidden">

      <div className="px-12 pt-2">

        {/* Slider */}
        <div
          className={`flex gap-[30px] ${isTransitioning
            ? "transition-transform duration-700 ease-in-out"
            : ""
            }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="min-w-[100%] flex-shrink-0 px-2">
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  className="w-full h-[60vh] object-cover rounded-2xl"
                />
              </picture>
            </div>
          ))}
        </div>

      </div>

      <button
        onClick={prevSlide}
        className="
     absolute  top-1/2 -translate-y-1/2
  w-12 h-12 flex items-center justify-center
  bg-gray-500 left-12
  text-white text-xl
  rounded-full
  border-0 outline-none focus:outline-none focus:ring-0
  z-20 transition-all duration-300

"
      >
        {"<"}
      </button>


      <button
        onClick={nextSlide}
        className="  absolute  top-1/2 -translate-y-1/2
  w-12 h-12 flex items-center justify-center
  bg-gray-500 right-12
  text-white text-xl
  rounded-full
  border-0 outline-none focus:outline-none focus:ring-0
  z-20 transition-all duration-300"
      >
        {">"}
      </button>

    </div>
  )
}

export default HeroPage
